let highlightedTexts = new Map();

function initHighlightMap() {
    highlightedTexts.clear();
}

function pushInHighlightMap(word) {
    highlightedTexts.set(word.id, word);
}

function popFromHighlightMap(word) {
    if(highlightedTexts.has(word.id)) {
        highlightedTexts.delete(word.id);
    }
}

function clearScreen() {
    for(let [wordId, word] of highlightedTexts.entries()) {
        word.isHighlighted = false;
        let spanElm = document.getElementById(wordId);
        spanElm.style.border = "none";
        spanElm.style.backgroundColor = "white";
        spanElm.style.paddingRight = '0px';
        spanElm.style.marginRight = '0px';
        highlightedTexts.delete(wordId);
    }
}

function createParagraph(containerId, wordList, currIndex) {
    let textBuilder = [];
    for(let i=0; i<wordList.length; i++) {
        let aWord = wordList[i];
        textBuilder.push('<span id="' + aWord.id + '">' + aWord.wordStr + '</span>');
    }
    
    if(isTextDecorated[currIndex]) {
        let dumpString = textBuilder.join(' ');
        document.getElementById(containerId).innerHTML = textDecorationBegin[currIndex] + ' ' + dumpString + textDecorationEnd[currIndex];
    }
    else {
        document.getElementById(containerId).innerHTML = textBuilder.join(' ');
    }
}
function createCaptions(containerId, wordList) {
    let textBuilder = [];
    for(let i=0; i<wordList.length; i++) {
        let aWord = wordList[i];
        textBuilder.push('<span id="' + aWord.id + '">' + aWord.wordStr + '</span>');
    }
    
    document.getElementById(containerId).innerHTML = textBuilder.join(' ');
}


function highlightText(currentTime, wordsList, sentenceList) {
    
    let highlightStart = 1000;
    let highlightEnd = -1;
    let recentlyHighlightedElementId = null;
    // first determine the sentence boundaries to highlight entire sentence
    for(let i=0; i<sentenceList.length; i++) {
        let aSentence = sentenceList[i];
        
        if(currentTime >= aSentence.startTime && currentTime <= aSentence.endTime) {
            highlightStart = aSentence.startTime;
            highlightEnd = aSentence.endTime;
            break;
        }
    }
    
    for(let i=0; i<wordsList.length; i++) {
        aWord = wordsList[i];

        if(currentTime >= aWord.startTime && currentTime < aWord.endTime) {
            aWord.isHighlighted = true;
            recentlyHighlightedElementId = aWord.id;
            let spanElm = document.getElementById(aWord.id);
            spanElm.style.border = "1px solid brown";
            if(aWord.isNumeric) {
                // create overlay for 5 seconds
                if(document.getElementById("overlay" + aWord.id) == null) {
                    displayNumericOverlay(aWord);
                    window.setTimeout(function(){
                        removeNumericOverlay();
                    }, 5000);
                }
            }
            if( i > 0) {
                let prevWord = wordsList[i-1];
                let prevWordY = document.getElementById(prevWord.id).offsetTop;
                let currWordY = document.getElementById(aWord.id).offsetTop;
                if(prevWordY != currWordY) {
                    // two consecutive words having different Y coordinate means
                    // they are in different lines
                    if(!aWord.responsibleForScroll) {
                        scrollElementToCenter(document.getElementById(aWord.id));
                        aWord.responsibleForScroll = true;
                    }
                }
            }
        }
        else if(aWord.isHighlighted) {
            aWord.isHighlighted = false;
            aWord.responsibleForScroll = false;
            let spanElm = document.getElementById(aWord.id);
            spanElm.style.border = "none";
        }
        
        if(aWord.startTime >= highlightStart && aWord.startTime < highlightEnd) {
            pushInHighlightMap(aWord);
            let spanElm = document.getElementById(aWord.id);
            spanElm.style.backgroundColor = "yellow";
            spanElm.style.paddingRight = '3px';
            spanElm.style.marginRight = '-3px';
        }
        else {
            popFromHighlightMap(aWord);
            let spanElm = document.getElementById(aWord.id);
            spanElm.style.backgroundColor = "white";
            spanElm.style.paddingRight = '0px';
            spanElm.style.marginRight = '0px';
        }
    }
    return recentlyHighlightedElementId;
}

function displayMiddleBar() {
    //let currentPlayObject = getPlayFromPlayList(playingIndex);
    //let contentLineHeight = getLineHeight(document.getElementById(currentPlayObject.htmlElementId));
    let contentLineHeight = 24;
    let midBarElement = document.getElementById('rectangle');
    midBarElement.style.height = '' + contentLineHeight + 'px';
    midBarElement.style.display = 'block';
}

function cancelMiddleBar() {
    let midBarElement = document.getElementById('rectangle');
    midBarElement.style.display = 'none';
}


let numericOverlayQueue = [];

function clearNumericOverlayQueue() {
    while(getNumericOverlayCount() > 0) {
        removeNumericOverlay();
    }
}

function getNumericOverlayCount() {
    return numericOverlayQueue.length;
}

function displayNumericOverlay(wordObject) {
    let numOverlayWrapper = document.createElement("DIV");
    numOverlayWrapper.className = "overlaywrapper";
    numOverlayWrapper.id = "overlay" + wordObject.id;
    let wordElement = document.getElementById(wordObject.id);
    //let yPlacement = (window.innerHeight/2) - 200 + (50 * getNumericOverlayCount());
    let yPlacement = wordElement.getBoundingClientRect().y - 25;
    let xPlacement = wordElement.getBoundingClientRect().x;
    numOverlayWrapper.style.top = yPlacement + "px";
    numOverlayWrapper.style.left = xPlacement + "px";

    let numOverlayInsider = document.createElement("DIV");
    numOverlayInsider.className = "numericoverlay";
    numOverlayInsider.id = "insider" + getNumericOverlayCount();
    numOverlayInsider.innerHTML = wordObject.wordStr;
    numOverlayInsider.style.fontSize = "14px";

    numOverlayWrapper.appendChild(numOverlayInsider);
    numOverlayWrapper.style.display = "block";
    document.body.appendChild(numOverlayWrapper);
    numericOverlayQueue.push(numOverlayWrapper);
}

function removeNumericOverlay() {
    if(getNumericOverlayCount() > 0) {
        let overlayElement = numericOverlayQueue.shift();
        document.body.removeChild(overlayElement);
    }
}

function displayFigureFab(text) {
    let fabElement = document.getElementById('figurefab');
    fabElement.style.bottom = '' + (window.innerHeight * 0.15) + 'px';
    fabElement.style.display = 'block';
    fabElement.firstElementChild.innerHTML = "Show " + text;
}

function isFigureFabDisplayed() {
    let fabElement = document.getElementById('figurefab');
    if(fabElement.style.display == 'block') {
        return true;
    }
    return false;
}

function changeFigureFab() {
    let fabElement = document.getElementById('figurefab');
    fabElement.firstElementChild.innerHTML = "Back to article";
    fabElement.style.backgroundColor = 'red';
    fabElement.style.display = 'block';
    
    //fabElement.style.transform = "rotate(90deg)";
}

function cancelFigureFab() {
    let fabElement = document.getElementById('figurefab');
    fabElement.style.display = 'none';
    fabElement.style.backgroundColor = '#3366cc';
    //fabElement.style.transform = "rotate(-90deg)";
}

function showVisualOnScreen(visualSrc) {
    let beginShow = document.getElementById('figureoverlay');
    beginShow.style.display = 'block';
    beginShow.firstElementChild.firstElementChild.src = visualSrc;
}
function discardVisualFromScreen() {
    let beginShow = document.getElementById('figureoverlay');
    beginShow.style.display = 'none';
}

function displayDiscourseText(discourselist) {
    for(let i=0; i<discourselist.length; i++) {
        let aDiscourse = discourselist[i];
        let aWordBag = aDiscourse.wordBag;

        for(let j=0; j<aWordBag.length; j++) {
            let wordId = aWordBag[j];
            document.getElementById(wordId).style.color = 'purple';
        }
    }
}