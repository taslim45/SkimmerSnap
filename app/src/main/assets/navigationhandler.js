let DEGREE_ONE_SWIPE_LB = 0.5;
let DEGREE_ONE_SWIPE_UB = 1.5;
let DEGREE_TWO_SWIPE_LB = 1.6;

let sharedTrigger = false;

function playNavigationEarcon(earconSrc, count) {
    let earconAudioElm = document.getElementById("earconAudio");
    if(count>0) {
        earconAudioElm.setAttribute("src", earconSrc);
        earconAudioElm.playbackRate = 1.0;
        audioPromise = earconAudioElm.play();
        earconAudioElm.onended = function() {
            earconAudioElm.pause();
            earconAudioElm.currentTime = 0;
            earconAudioElm.setAttribute("src", "");
            count--;
            playNavigationEarcon(earconSrc, count);
        }
    }
}

function progressInSentence(sentence, time) {
    let resProgress = 0;
    let start = sentence.startTime;
    let end = sentence.endTime;
    resProgress = time - start;
    resProgress = resProgress / (end - start);
    return resProgress;
}

function swipeMovement(factor, currentPlayObject, currentTime) {
    let nextPlayObject, whereToStartId;
    let iterator;
    if(factor > 0) {
        // going forward
        iterator = currentPlayObject.playSerial + 1;
        nextPlayObject = getPlayFromPlayList(iterator);
        
        while(nextPlayObject.type != MAIN && nextPlayObject.type != ANNOUNCEMENT) {
            iterator++;
            nextPlayObject = getPlayFromPlayList(iterator);
        }
        
    }
    else {
        // going back
        iterator = currentPlayObject.playSerial - 1;
        nextPlayObject = getPlayFromPlayList(iterator);
        
        while(nextPlayObject.type != MAIN && nextPlayObject.type != ANNOUNCEMENT) {
            iterator--;
            nextPlayObject = getPlayFromPlayList(iterator);
        }
        
    }
    if(nextPlayObject) { 
        whereToStartId = nextPlayObject.startId;
        
        setTimeout(function() {
            if(sharedTrigger) {
                sharedTrigger = false;
            }
            else {
                modulateEarcon(earcons[PARAGRAPH_DELIM], 1.0);
            } 
        }, 100); // cool down time to wait for pan movement notification
        setReadingElementId(whereToStartId);
    }
}


function playEarcon(earSrc) {
    let earAudio = document.createElement("audio");
    earAudio.setAttribute("src", earSrc);
    earAudio.play();
}

let sensingQueue = new Map();

function initOrClearSensingQueue() {
    sensingQueue.clear();
}

function insertInSensingQueue(element) {
    sensingQueue.set(element.id, element);
}

function presentInSensingQueue(id) {
    if(sensingQueue.has(id)) return true;
    return false;
}

function getTopElementFromSensingQueue() {
    if(sensingQueue.size > 0) {
        let toReturn = null;
        for(let [key,value] of sensingQueue) {
            toReturn = value;
            break;
        }
        return toReturn;
    }
}

function getSuperContainerId(containerId) {
    let idJoiner = [];
    let splitParts = containerId.split("_");
    
    if(splitParts && splitParts.length >= 0) {
        for(let j=0; j<splitParts.length - 1; j++) {
            idJoiner.push(splitParts[j]);
        }
        if(idJoiner.length > 1) return idJoiner.join('_');
        else return splitParts[0];
    }
    
    return null;
}

function panMovement(currentPlayObject, currentTime, sensedElement) {
    if(!presentInSensingQueue(sensedElement.id)) {
        // new element to deal with
        // delete or clear any previous sensed element
        let lastSensedElement = getTopElementFromSensingQueue();
        initOrClearSensingQueue();
        insertInSensingQueue(sensedElement);
        if(lastSensedElement == null) return; // because we are in the same line 
        let whereToStartId = sensedElement.id;
        
        let lastPlayObject, sensedPlayObject, lastSensedTime, sensedTime;

        if(sensedElement.tagName == "H2" || sensedElement.tagName == "H3") {
            // current sensed elements are H2 and H3
            // always play section delimiter here
            console.log('tag H2 or H3');
            whereToStartId = handleSectionHeaders(sensedElement);
            sharedTrigger = true;
            if(sensedElement.tagName == "H2") modulateEarcon(earcons[SECTION_DELIM], 1.4);
            else modulateEarcon(earcons[SECTION_DELIM], 0.4);
            setReadingElementId(whereToStartId);
        }
        else if(sensedElement.tagName == "H1") {
            whereToStartId = getPlayFromPlayList(0).startId;
            modulateEarcon(earcons[SECTION_DELIM], 1.0);
            setReadingElementId(whereToStartId);
            console.log('tag H1');
        }
        else {
            // all span word elements
            sensedPlayObject = getPlayObjectFromElement(sensedElement);
            if(lastSensedElement.tagName == "H2" || lastSensedElement.tagName == "H3") {
                let lastId = handleSectionHeaders(lastSensedElement);
                lastPlayObject = getPlayObjectFromElement(document.getElementById(lastId));
            }
            else {
                lastPlayObject = getPlayObjectFromElement(lastSensedElement);
            }

            if(sensedPlayObject.playSerial == lastPlayObject.playSerial) {
                // in the same paragraph
                let direction = interpretDirection(sensedElement, lastSensedElement);
                console.log('in same paragraph - ' + direction);
                // inlinesentence defines the first sentence found in the current line
                // actual sensed is defined as the sentence the sensed element is actually part of
                let inlineSentence = findFirstSentenceInCurrentLine(sensedElement);
                let actualSensedSentence = findSentenceFromWordElement(sensedElement);
                // currentSentencePlaying is the sentence currently playing now 
                let currentSentencePlaying = findSentenceFromTime(currentTime, currentPlayObject.sentenceList);
                if(inlineSentence && direction == "UP") {
                    whereToStartId = inlineSentence.startId;
                    modulateEarcon(earcons[SENTENCE_DELIM], 1.0);
                    setReadingElementId(whereToStartId);
                }
                else if(inlineSentence && direction == "DOWN") {
                    
                    if(sensedPlayObject.playSerial == currentPlayObject.playSerial && inlineSentence.serial == currentSentencePlaying.serial && progressInSentence(currentSentencePlaying, currentTime) > 0.50) {
                        // checking if detected inline sentence is also the currently playing sentence and the progress is more than 50%
                        // then we start from the beginning of this sentence
                        whereToStartId = inlineSentence.startId;
                    }
                    else {
                        // made less than 50% progress in current sentence
                        // so go the previous sentence
                        whereToStartId = sensedPlayObject.sentenceList[inlineSentence.serial - 1].startId;
                    }
                    modulateEarcon(earcons[SENTENCE_DELIM], 1.0);
                    setReadingElementId(whereToStartId);
                }
                else if(direction == "DOWN" && lastSensedElement.id == sensedPlayObject.sentenceList[actualSensedSentence.serial + 1].startId) {
                    // situation where last sensed was also start of the sentence
                    // and now the user is going to the one above it
                    whereToStartId = actualSensedSentence.startId;
                    modulateEarcon(earcons[SENTENCE_DELIM], 1.0);
                    setReadingElementId(whereToStartId);
                }
                else if(direction == "DOWN" && sensedPlayObject.playSerial == currentPlayObject.playSerial && actualSensedSentence.serial < currentSentencePlaying.serial
            && lastSensedElement.getBoundingClientRect().y == document.getElementById(currentSentencePlaying.startId).getBoundingClientRect().y ) {
                    // situation where its playing current sentence
                    // user tries to go to one above, but the previous sentence did not start in that line, so the system is detecting that sentence now
                    whereToStartId = actualSensedSentence.startId;
                    modulateEarcon(earcons[SENTENCE_DELIM], 1.0);
                    setReadingElementId(whereToStartId);
                }
            }
            else if(sensedPlayObject.playSerial > lastPlayObject.playSerial) {
                // entering a new paragraph 
                whereToStartId = sensedPlayObject.startId;
                modulateEarcon(earcons[PARAGRAPH_DELIM], 1.0);
                setReadingElementId(whereToStartId);
                console.log('new paragraph');
            }
            else {
                // entering a paragraph from the bottom last sentence
                let allSentences = sensedPlayObject.sentenceList;
                whereToStartId = allSentences[allSentences.length - 1].startId;
                modulateEarcon(earcons[PARAGRAPH_DELIM], 1.0);
                setReadingElementId(whereToStartId);
                console.log('previous paragraph from bottom');
            }
        }
    }
}

function interpretDirection(sensedElement, previousElement) {
    let sensedTime = getWordTimestamp(sensedElement);
    let lastTime = getWordTimestamp(previousElement);
    if(sensedTime > lastTime) return "UP";
    else return "DOWN";
}

/*
    code for disourse markers
*/

let discourseQueue = new Map();

function clearDiscourseQueue() {
    discourseQueue.clear();
}

function getTopDiscourse() {
    let resDiscourse;
    for(let [key,value] of discourseQueue) {
        resDiscourse = value;
        break;
    }
    return resDiscourse;
}

function getNextMetaDiscourse(time, playingObject) {
    // returns the discourse object
    let discourseList = playingObject.discourseList;
    let playIndex = playingObject.playSerial;
    let resDiscourse = null;

    for(let i=0; i<discourseList.length; i++) {
        let aDiscourse = discourseList[i];

        if(aDiscourse.startTime >= time) {
            resDiscourse = aDiscourse;
            break;
        }
    }
    if(resDiscourse) return resDiscourse;
    discourseList = [];
    
    while(discourseList.length == 0) {
        playIndex++;
        if(playIndex > getPlayListSize() - 1) break;
        playingObject = getPlayFromPlayList(playIndex);
        discourseList = playingObject.discourseList;
        time = 0;
    }
    
    for(let i=0; i<discourseList.length; i++) {
        let aDiscourse = discourseList[i];

        if(aDiscourse.startTime >= time) {
            resDiscourse = aDiscourse;
            break;
        }
    }
    

    return resDiscourse;
}

function saveDiscourseForDetails(discourseObject) {
    if(discourseQueue.size > 0) {
        clearDiscourseQueue();
    }
    discourseQueue.set(discourseObject.startId, discourseObject);
}

function getPrevMetaDiscourse(time, playingObject) {
    // returns the discourse object
    let discourseList = playingObject.discourseList;
    let playIndex = playingObject.playSerial;
    let resDiscourse = null;

    for(let i=discourseList.length - 1; i >= 0; i--) {
        let aDiscourse = discourseList[i];

        if(aDiscourse.startTime < time) {
            resDiscourse = aDiscourse;
            if(aDiscourse.endTime >= (time - 0.2) && aDiscourse.endTime <= (time + 0.2)) {
                if(i>0) resDiscourse = discourseList[i-1];
                else resDiscourse = null;
            } 
            break;
        }
    }
    if(resDiscourse) return resDiscourse;
    discourseList = [];

    while(discourseList.length == 0) {
        playIndex--;
        if(playIndex < 0) break;
        playingObject = getPlayFromPlayList(playIndex);
        if(playingObject.type != MAIN) continue;
        discourseList = playingObject.discourseList;
        time = playingObject.sentenceList[playingObject.sentenceList.length - 1].endTime + 0.5; // 0.5 seconds buffer to catch the discourse marker
    }

    for(let i=discourseList.length - 1; i >= 0; i--) {
        let aDiscourse = discourseList[i];

        if(aDiscourse.startTime < time) {
            resDiscourse = aDiscourse;
            if(aDiscourse.endTime >= (time - 0.2) && aDiscourse.endTime <= (time + 0.2)) {
                if(i>0) resDiscourse = discourseList[i-1];
                else resDiscourse = null;
            } 
            break;
        }
    }

    return resDiscourse;
}