let containerId;
let startId;
let audioSource;
let dataSource;
let playType;
let textDecoration;
let speechRate = 1.0;

let discourse = function(startId, startTime, endTime, sentenceStartId, wordBag) {
    this.startId = startId;
    this.startTime= startTime;
    this.endTime = endTime;
    this.sentenceStartId = sentenceStartId;
    this.wordBag = wordBag;
}

let sentence = function(startTime, endTime, startId, hasVisual, serial, visualId) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.startId = startId;
    this.hasVisual = hasVisual;
    this.visualId = visualId;
    this.serial = serial;
    this.requested = false;
    this.notified = false;
}

let visual = function(id, type, announcementSrc, captionSrc, announcementJSON, announcementContainerId, captionJSON, captionContainerId, nickname) {
    this.id = id;
    this.type = type;
    this.isCaption = false;
    this.speechRate = 1.2;
    this.announcementSrc = announcementSrc;
    this.captionSrc = captionSrc;
    this.articleReferenceList = [];
    this.announcementJson = announcementJSON;
    this.announcementContainerId = announcementContainerId;
    this.captionJson = captionJSON;
    this.captionContainerId = captionContainerId;
    this.announcementWordList = [];
    this.announcementSentenceList = [];
    this.captionWordList = [];
    this.captionSentenceList = [];
    this.resumeId = null;
    this.nickname = nickname;
}
let visualList = [];
function addArticleReference(visual, id) {
    visual.articleReferenceList.push(id);
}
function getVisualListSize() {
    return visualList.length;
}
function getVisualFromList(index) {
    return visualList[index];
}

let playList = [];

function getPlayFromPlayList(index) {
    if(index >= 0 && index < playList.length) return playList[index];
    else return null;
}

function getPlayObjectFromElement(element) {
    let containerId = getContainerId(element);
    console.log('container id:' + containerId);
    return getPlayFromContainerId(containerId);
}

function getPlayFromContainerId(elementId) {
    let resPlayObj = null;
    for(let playIndex = 0; playIndex < playList.length; playIndex++) {
        if(playList[playIndex].containerId.length > 0 && playList[playIndex].containerId == elementId) {
            resPlayObj = playList[playIndex];
            break;
        }
    }
    return resPlayObj;
}

function getWords(containerId, resultset) {
    var resArray = [];
    resArray = resultset.results;
    var altObjs = resArray[0];
    var altArray = altObjs.alternatives;
    var timeObj = altArray[0];
    var timeArray = timeObj.timestamps;

    let words = function(wordStr, startTime, endTime, hasNumeric) {
        this.wordStr = wordStr;
        this.startTime = startTime;
        this.endTime = endTime;
        this.isNumeric = hasNumeric;
        this.id = containerId + '_' + (startTime * 1000);
        this.isHighlighted = false;
        this.responsibleForScroll = false;
    }
    let wordsList = [];
    for(let i=0; i<timeArray.length; i++) {
        let wordObj;
        if(timeArray[i].length > 3) {
            wordObj = new words(timeArray[i][0], timeArray[i][1], timeArray[i][2], timeArray[i][3]);
        }
        else {
            wordObj = new words(timeArray[i][0], timeArray[i][1], timeArray[i][2], false);
        }
        
        wordsList.push(wordObj);
    }
    return wordsList;
}

function getSentences(containerId, resultset) {
    var resArray = [];
    resArray = resultset.results;
    var altObjs = resArray[0];
    var altArray = altObjs.alternatives;
    var underlineObj = altArray[0];
    var underlineArray = underlineObj.sentences;
    let sentenceList = [];
    for(let i=0; i<underlineArray.length; i++) {
        let senStartTime = underlineArray[i][0];
        let senEndTime = underlineArray[i][1];
        let hasViz = false;
        if(underlineArray[i].length > 2) {
            hasViz = underlineArray[i][2];
        }
        let startId = containerId + '_' + (senStartTime * 1000);
        let sentenceObj = null;
        if(hasViz) {
            let visualId = underlineArray[i][3];
            sentenceObj = new sentence(senStartTime, senEndTime, startId, hasViz, i, visualId);
            addArticleReference(getVizObjectById(visualId), startId); // this is for visual objects
        }
        else {
            sentenceObj = new sentence(senStartTime, senEndTime, startId, hasViz, i);
        } 
        sentenceList.push(sentenceObj);
    }
    return sentenceList;
}

function getDiscourseMarkers(containerId, resultset, sentencelist, wordlist) {
    var resArray = [];
    resArray = resultset.results;
    var altObjs = resArray[0];
    var altArray = altObjs.alternatives;
    var timeObj = altArray[0];
    var timeArray = timeObj.keywords;
    keywordsList = [];
    for(let i=0; i<timeArray.length; i++) {
        let discStartTime = timeArray[i][0];
        let discEndTime = timeArray[i][1];
        let sentId = findSentenceFromTime(discStartTime, sentencelist).startId;
        let discStartId = null;
        let sentstartTime = -1;
        let left = 0;
        let right = wordlist.length - 1;
        let mid = wordlist.length + 1;
        while(left <= right) {
            mid = Math.floor(left + (right- left)/2);
            if(discStartTime == wordlist[mid].startTime) {
                discStartId = wordlist[mid].id;
                break;
            }
            else if(discStartTime > wordlist[mid].startTime) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        let wordBag = [];
        wordBag.push(discStartId);
        for(let i=mid+1; i<wordlist.length; i++) {
            if(wordlist[i].startTime >= discEndTime) break;
            wordBag.push(wordlist[i].id);
        }
        let disc = new discourse(discStartId, discStartTime, discEndTime, sentId, wordBag);
        keywordsList.push(disc);
        
    }
    return keywordsList;
}

let plays = function(elementId, audioSrc, jsonSrc, typeofPlay, textDecor, index, speechRate) {
    this.containerId = elementId;
    this.audioSource = audioSrc;
    this.dataSource = jsonSrc;
    this.type = typeofPlay;
    this.textDecoration = textDecor;
    this.playSerial = index;
    this.speechRate = speechRate;
    this.wordList = [];
    this.discourseList = [];
    this.sentenceList = [];
    this.startId = null;
}

function populateVisualObject() {
    for(let vizId = 0; vizId < visualIds.length; vizId++) {
        let vizObj = new visual(
            visualIds[vizId], 
            visualType[vizId], 
            visualAnnouncementAudio[vizId], 
            visualCaptionAudio[vizId],
            figAnnouncementJSONs[vizId],
            figAnnouncementContainerList[vizId],
            figCaptionJSONs[vizId],
            figCaptionContainerList[vizId],
            visualNickNames[vizId]
        );
        vizObj.announcementWordList = getWords(vizObj.announcementContainerId, vizObj.announcementJson);
        vizObj.announcementSentenceList = getSentences(vizObj.announcementContainerId, vizObj.announcementJson);
        vizObj.captionWordList = getWords(vizObj.captionContainerId, vizObj.captionJson);
        vizObj.captionSentenceList = getSentences(vizObj.captionContainerId, vizObj.captionJson);
        visualList.push(vizObj);
    }
}

function getVizObjectById(visualId) {
    let resVizObj = null;
    for(let vizId = 0; vizId < visualList.length; vizId++) {
        resVizObj = visualList[vizId];
        if(resVizObj.id == visualId) {
            break;
        }
    }
    return resVizObj;
}

function createPlayList() {
    initVizMapper();
    populateVisualObject();
    for(let playIndex = 0; playIndex < audioFiles.length; playIndex++) {
        let playObj = new plays(containerIdList[playIndex], audioFiles[playIndex], jsonVarObj[playIndex], playContentType[playIndex], isTextDecorated[playIndex], playIndex, speechRateVariants[playIndex]);
        if(containerIdList[playIndex].length > 0) {
            playObj.wordList = getWords(containerIdList[playIndex], jsonVarObj[playIndex]);
            playObj.startId = playObj.wordList[0].id;
            playObj.sentenceList = getSentences(containerIdList[playIndex], jsonVarObj[playIndex]);
            playObj.audioSource = "audio/" + audioFiles[playIndex];
            playObj.discourseList = getDiscourseMarkers(containerIdList[playIndex], jsonVarObj[playIndex], playObj.sentenceList, playObj.wordList);
        }
        //console.log(playObj);
        playList.push(playObj);
    }
}

function getPlayListSize() {
    return playList.length;
}

let visualNameMapper = new Map();

function initVizMapper() {
    visualNameMapper.clear();
    visualNameMapper.set("fig1", "Figure 1");
}

function getVizName(key) {
    if(visualNameMapper.has(key)) {
        return visualNameMapper.get(key);
    }
}