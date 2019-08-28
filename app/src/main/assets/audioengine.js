function isPlaying() {
    contentAudioElm = document.getElementById("contentAudio");
    if(contentAudioElm.currentTime > 0 && !contentAudioElm.paused && !contentAudioElm.ended) {
        return true;
    }
    else {
        return false;
    }
}

function pauseAudio() {
    let contentAudioElm = document.getElementById("contentAudio");
    contentAudioElm.pause();
}

function resumeAudio() {
    contentAudioElm = document.getElementById("contentAudio");
    if(contentAudioElm.currentTime > 0) {
        contentAudioElm.play();
    }
    else {
        
    }
}

function stopAudio(audioObject) {
    audioObject.audio.pause();
    audioObject.audio.currentTime = 0;
    audioObject.audio.setAttribute("src", "");
}
/*
function isPlaying(audioObject) {
    if(audioObject.audio.currentTime > 0 && !audioObject.audio.paused && !audioObject.audio.ended) {
        return true;
    }
    return false;
}
*/
function goToSeconds(audio, seekTime) {
    audio.currentTime = seekTime;
    audio.play();
}

function increaseSpeechRate(elementId) {
    let contentAudioElm = document.getElementById(elementId);
    let currentRate = contentAudioElm.playbackRate;
    if(currentRate <= 1.8) {
        currentRate += 0.2;
    }
    contentAudioElm.playbackRate = currentRate;
    return currentRate;
}

function decreaseSpeechRate(elementId) {
    let contentAudioElm = document.getElementById(elementId);
    let currentRate = contentAudioElm.playbackRate;
    if(currentRate >= 0.8) {
        currentRate -= 0.2;
    }
    contentAudioElm.playbackRate = currentRate;
    return currentRate;
}

function getFirstElementOfThisSentence(sentenceTime, wordsList) {
    for(let wordIndex = 0; wordIndex<wordsList.length; wordIndex++) {
        if(wordsList[wordIndex].startTime == sentenceTime) {
            return document.getElementById(wordsList[wordIndex].id);
        }
    }
}

function goToNextSentence(audio, wordsList, sentenceList) {
    let nowTime = audio.currentTime;
    //console.log('current time ' + nowTime);
    
    for(let i=0; i<sentenceList.length; i++) {
        aSentence = sentenceList[i];
        //console.log(aSentence.startTime + ' ' + aSentence.endTime);
        
        if(nowTime >= aSentence.startTime && nowTime < aSentence.endTime) {
            // current time is within this bounding range
            //console.log('found a match ' + i);
            if(i == sentenceList.length - 1) {
                // last sentence of current paragraph
                // move to next paragraph
                goToNextParagraph(audio);
            }
            else {
                // pause current playback
                pauseAudio(audio);
                //move to next sentence or scroll to next sentence
                upcomingSentence = sentenceList[i+1];
                let firstElement = getFirstElementOfThisSentence(upcomingSentence.startTime, wordsList);
                scrollElementToCenter(firstElement);
                // play earcon to next sentence
                earconAudioElm = document.getElementById("earconAudio");
                earconAudioElm.setAttribute("src", earcons[1]);
                earconAudioElm.play();
                earconAudioElm.onended = function() {
                    // move to next sentence
                    goToSeconds(audio, upcomingSentence.startTime);    
                }
            }
            break;
        } 
    }
    
    return;
}

function goToPreviousSentence(audio, wordsList, sentenceList) {
    let nowTime = audio.currentTime;
    for (i=0; i<sentenceList.length; i++) {
        aSentence = sentenceList[i];
        if(nowTime >= aSentence.startTime && nowTime < aSentence.endTime) {
            // current time is within this bounding range
            if(i == 0) {
                // first sentence of current paragraph
                // move to previous paragraph
                goToPreviousParagraph(audio);
            }
            else {
                // pause audio
                pauseAudio(audio);
                // scroll to previous sentence
                prevSentence = sentenceList[i - 1];
                let firstElement = getFirstElementOfThisSentence(prevSentence.startTime, wordsList);
                scrollElementToCenter(firstElement);
                earconAudioElm = document.getElementById("earconAudio");
                earconAudioElm.setAttribute("src", earcons[2]);
                earconAudioElm.play();
                earconAudioElm.onended = function() {
                    // move to previous sentence
                    goToSeconds(audio, prevSentence.startTime);  
                }
            }
            break;
        }
    }
}

function goToNextParagraph(audio) {
    nextMacroElementContentFromAndroid();
}

function goToPreviousParagraph(audio) {
    prevMacroElementContentFromAndroid();
}

function notifySpeechRateChange(speechrate) {
    let text = "Speech rate: ";
    if(speechrate == 1.0) {
        text += "Normal";
    }
    else if(speechrate == 0.80) {
        text += "" + speechrate  + " (Slow)";
    }
    else if(speechrate < 0.80) {
        text += "0.60"  + " (Much Slower)";
    }
    else if(speechrate == 1.2) {
        text += "" + speechrate  + " (Fast)";
    }
    else if(speechrate == 1.4) {
        text += "" + speechrate  + " (Faster)";
    }
    else if(speechrate > 1.5 && speechrate < 1.7) {
        text += "1.6"  + " (Very fast)";
    }
    else if(speechrate > 1.7 && speechrate < 1.9) {
        text += "1.8"  + " (Very very fast)";
    }
    else if(speechrate > 1.9) {
        text += "2.0"  + " (Super fast)";
    }
    Android.showToast(text);
}

function modulateEarcon(earconSrc, rate) {
    let earconElement = document.createElement("audio");
    
    earconElement.setAttribute("src", earconSrc);
    earconElement.playbackRate = rate;
    earconElement.play();
}