 let visualsToShow = new Map();
 let sentenceProcessor = new Map();

 function clearSentenceProcessor() {
    sentenceProcessor.clear();
 }

 function pushToProcessor(sentence) {
    sentenceProcessor.set(sentence.startId, sentence);
 }

 function isSentenceProcessed(startId) {
    if(sentenceProcessor.has(startId)) {
        return true;
    }
    return false;
 } 

function processedSentenceCount() {
    return sentenceProcessor.size;
}

function clearLastSentenceFromProcessor() {
    for(let [startid, sentence] of sentenceProcessor) {
        sentenceProcessor.delete(startid);
        break;
    }
}

function clearVisuals() {
    visualsToShow.clear();
}

function visualsCount() {
    return visualsToShow.size;
}

function pushToVisualShow(visualId, sentence) {
    visualsToShow.set(visualId, sentence);
}

function isVisualShowing(visualId) {
    if(visualsToShow.has(visualId)) {
        return true;
    }
    return false;
}
function popVisualShow(visualId) {
    if(visualsToShow.has(visualId)) {
        visualsToShow.delete(visualId);
    }
}

function getFirstVisual() {
    let resSentence = null;
    for (let [visualId, aSentence] of visualsToShow) {
        resSentence = aSentence;
        break;
    }
    return resSentence;
}

function processVisuals(currentTime, sentencelist) {
    let aSentence = findSentenceFromTime(currentTime, sentencelist);
    
    if(aSentence==null || (aSentence && isSentenceProcessed(aSentence.startId))) {
        return;
    }
    
    pushToProcessor(aSentence);
    
    if(aSentence.hasVisual) {
        aSentence.requested = true;
        if(!isVisualShowing(aSentence.visualId)) {
            aSentence.notified = false;
            pushToVisualShow(aSentence.visualId, aSentence);
        }
    }
    
}

function sendNotification(sentence) {
    sentence.notified = true;
    pushToVisualShow(sentence.visualId, sentence);
    
    Android.vibrateInPattern();
}

function getVisualSource(visualId) {
    let viz = document.getElementById(visualId);
    return viz.firstElementChild.src;
}