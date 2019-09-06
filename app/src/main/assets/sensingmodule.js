function elementAtCenterPointer(X) {
    let centerX;
    if(X) {
        centerX = X;
    }
    else {
        centerX = document.getElementById('scrollable').getBoundingClientRect().x + 1;
    }
    //console.log(centerX);
    let centerY = 0.45 * window.innerHeight;
    let elem = document.elementFromPoint(centerX, centerY);
    let tempElm = null;
    //console.log(elem);
    if(elem.id == "rectangle") {
        /*
        * The yellow highlighting bar interferes with center element detection. 
        * So when we detect the rectangle, we first hide it and then re-display it again.
        */
        elem.style.display = "none";
        tempElm = elem;
        elem = document.elementFromPoint(centerX, centerY);
        tempElm.style.display = "block";
        //console.log(elem.tagName);
        while(elem.tagName!="SPAN") {
            centerY += 1.0;
            //console.log(centerY);
            elem = document.elementFromPoint(centerX, centerY);
            if(elem.id == "rectangle"){
                tempElm = elem;
                elem.style.display = "none";
                elem = document.elementFromPoint(centerX, centerY);
                tempElm.style.display = "block";
            }
        }
        if(elem.tagName == "SPAN" && elem.className == "section-number") {
            // special case when the span element is for section number
            tempElm = elem;
            elem = elem.parentElement;
        }
        //console.log(elem);
    }
    else {
        // the yellow highlighting bar is not there
        while(elem.tagName!="SPAN") {
            centerY += 1.0;
            //console.log(centerY);
            elem = document.elementFromPoint(centerX, centerY);
        }
        if(elem.tagName == "SPAN" && elem.className == "section-number") {
            // special case when the span element is for section number
            tempElm = elem;
            elem = elem.parentElement;
        }
        else if(elem.tagName == "SPAN" && elem.className == "title") {
            tempElm = elem;
            elem = elem.parentElement;
        }
    }
    return elem;
}

function getContainerId(element) {
    let idJoiner = [];
    let eId = element.id;
    let splitParts = eId.split("_");
    if(splitParts && splitParts.length > 0) {
        for(let j=0; j<splitParts.length - 1; j++) {
            idJoiner.push(splitParts[j]);
        }
        return idJoiner.join('_');
    }
    return null;
}

function getWordTimestamp(element) {
    let eId = element.id;
    let splitParts = eId.split("_");
    if(splitParts && splitParts.length > 0) {
        return parseInt(splitParts[splitParts.length - 1]) / 1000;
    }
    return -1;
}

function senseLine() {
    let elementOnLine = elementAtCenterPointer();
    let resultSensing= null;
    if(elementOnLine.tagName == "SPAN") {
        // could be a word
        //console.log(elementOnLine);
        if(findFirstSentenceInCurrentLine(elementOnLine)) resultSensing = findFirstSentenceInCurrentLine(elementOnLine).startId;
        
    }
    else if(elementOnLine.tagName == "H2" || elementOnLine.tagName == "H3") {
        // possibly titles or section headers
        resultSensing = handleSectionHeaders(elementOnLine);
    }
    else if(elementOnLine.tagName == "H1") {
        resultSensing = getPlayFromPlayList(0).startId;
    }
    return resultSensing;
}

function handleSectionHeaders(element) {
    let containerPlayObject = getPlayFromContainerId(element.id);
    return containerPlayObject.startId;
}

function findBeginningOfPlayObject(wordElement) {
    let wordId = wordElement.id;
    let containerId = getContainerId(document.getElementById(wordId));
    let playObject = getPlayFromContainerId(containerId);
    return playObject.startId;
}

function findBeginningOfSentence(wordElement) {
    if(wordElement == null) wordElement = elementAtCenterPointer();

    let containerId = getContainerId(wordElement);
    let wordTimestamp = getWordTimestamp(wordElement);
    let containerPlayObject = getPlayFromContainerId(containerId);
    let allSentences = containerPlayObject.sentenceList;
    let resultFirstSentenceStartId = null;
    let left = 0;
    let right = allSentences.length - 1;
    while(left <= right) {
        let mid = Math.floor(left + (right- left)/2);
        if(wordTimestamp >= allSentences[mid].startTime && wordTimestamp <= allSentences[mid].endTime) {
            resultFirstSentenceStartId = allSentences[mid].startId;
            break;
        }
        else if(wordTimestamp > allSentences[mid].endTime) {
            left = mid + 1;
        }
        else if(wordTimestamp < allSentences[mid].startTime) {
            right = mid - 1;
        }
    }
    return resultFirstSentenceStartId;
}

function findSentenceFromWordElement(wordElement) {
    if(wordElement == null) wordElement = elementAtCenterPointer();

    let containerId = getContainerId(wordElement);
    let wordTimestamp = getWordTimestamp(wordElement);
    let containerPlayObject = getPlayFromContainerId(containerId);
    let allSentences = containerPlayObject.sentenceList;
    let resultSentence = null;
    let left = 0;
    let right = allSentences.length - 1;
    while(left <= right) {
        let mid = Math.floor(left + (right- left)/2);
        if(wordTimestamp >= allSentences[mid].startTime && wordTimestamp <= allSentences[mid].endTime) {
            resultSentence = allSentences[mid];
            break;
        }
        else if(wordTimestamp > allSentences[mid].endTime) {
            left = mid + 1;
        }
        else if(wordTimestamp < allSentences[mid].startTime) {
            right = mid - 1;
        }
    }
    return resultSentence;
}

function findFirstSentenceInCurrentLine(wordElement) { // returning object of the first sentence
    if(wordElement == null) wordElement = elementAtCenterPointer();

    let containerId = getContainerId(wordElement);
    let wordTimestamp = getWordTimestamp(wordElement);
    let containerPlayObject = getPlayFromContainerId(containerId);
    let allSentences = containerPlayObject.sentenceList;
    let resultFirstSentence = null;
    let indexOfCurrentSentence = -1;
    let left = 0;
    let right = allSentences.length - 1;
    while(left <= right) {
        let mid = Math.floor(left + (right- left)/2);
        if(wordTimestamp >= allSentences[mid].startTime && wordTimestamp <= allSentences[mid].endTime) {
            indexOfCurrentSentence = mid;
            break;
        }
        else if(wordTimestamp > allSentences[mid].endTime) {
            left = mid + 1;
        }
        else if(wordTimestamp < allSentences[mid].startTime) {
            right = mid - 1;
        }
    }
    
    let currentSentence = allSentences[indexOfCurrentSentence];
    let wordRectProperty = wordElement.getBoundingClientRect();
    let currentSentenceStartRectProperty = document.getElementById(currentSentence.startId).getBoundingClientRect();
    let nextSentenceRectProperty = null;
    if(indexOfCurrentSentence + 1 < allSentences.length) {
        nextSentenceRectProperty = document.getElementById(allSentences[indexOfCurrentSentence+1].startId).getBoundingClientRect();
    }
    
    if(wordRectProperty.y == currentSentenceStartRectProperty.y && wordRectProperty.height == currentSentenceStartRectProperty.height) {
        // element at center is probably the start of a sentence
        resultFirstSentence = currentSentence;
    }
    else if(indexOfCurrentSentence + 1 < allSentences.length && wordRectProperty.y == nextSentenceRectProperty.y && wordRectProperty.height == nextSentenceRectProperty.height) {
        // next sentence is in the same line
        resultFirstSentence = allSentences[indexOfCurrentSentence+1];
    }
    return resultFirstSentence;
}

function findSentenceFromTime(time, sentences) {
    let left = 0;
    let right = sentences.length - 1;
    let resSentence = null;
    while(left <= right) {
        let mid = Math.floor(left + (right- left)/2);
        if(time >= sentences[mid].startTime && time <= sentences[mid].endTime) {
            resSentence = sentences[mid];
            break;
        }
        else if(time > sentences[mid].endTime) {
            left = mid + 1;
        }
        else if(time < sentences[mid].startTime) {
            right = mid - 1;
        }
    }
    return resSentence;
}

function handleDeadTime(time, sentences, audioLength) {
    let lastSentence = null;
    let nSentence = sentences.length;
    if(time < audioLength) {
        // dead time detected
        // find the last sentence before deadtime
        if(time > sentences[nSentence - 1].endTime) lastSentence = sentences[nSentence - 1];
        else {
            for(let i=1; i<nSentence; i++) {
                if(time > sentences[i-1].endTime && time < sentences[i].startTime) {
                    lastSentence = sentences[i-1];
                    break;
                }
            }
        }
    }
    return lastSentence;
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

function isContainerIdSectionTitle(containerId) {
    let splitParts = containerId.split("_");

    if(splitParts && splitParts.length >0 && (splitParts[splitParts.length - 1] === 'main' || splitParts[splitParts.length - 1].search('sub') >= 0)) {
        return true;
    }
    return false;
}