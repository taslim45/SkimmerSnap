let isScrollLocked = false;

function freezeAutoScroll() {
    isScrollLocked = true;
}

function unfreezeAutoScroll() {
    isScrollLocked = false;
}

function getLineHeight(element) {
    let compSty = getComputedStyle(element, null);
    //console.log(compSty);
    let tempElement = document.createElement(element.nodeName);
    tempElement.setAttribute("style","margin:0px;padding:0px;font-family:" + compSty.fontFamily + ";font-size:" + compSty.fontSize);
    tempElement.innerHTML = "Line";
    tempElement = element.parentNode.appendChild(tempElement);
    let estimatedHeight = tempElement.clientHeight;
    tempElement.parentNode.removeChild(tempElement);
    return estimatedHeight;
}

function srollOneLine(element) {
    let yToScroll = getLineHeight(element);
    //console.log(yToScroll);
    document.documentElement.scrollBy(0, yToScroll);
}

function getWordWidth(element, word) {
    let compSty = getComputedStyle(element, null);
    let tempElement = document.createElement(element.nodeName);
    tempElement.setAttribute("style","margin:0px;padding:0px;font-family:" + compSty.fontFamily + ";font-size:" + compSty.fontSize);
    tempElement.innerHTML = word;
    tempElement = element.parentNode.appendChild(tempElement);
    let estimatedWidth = tempElement.offsetWidth;
    tempElement.parentNode.removeChild(tempElement);
    return estimatedWidth;
}

function getXBound() {
    let outerContainer = document.getElementById('scrollable');
    return (outerContainer.getBoundingClientRect().width + outerContainer.getBoundingClientRect().x);
}

function scrollElementToCenter(element) {
    if(isScrollLocked) return;
    let currentScrollPosition = document.documentElement.scrollTop;
    /*
    *scrolling theory: 
    1. first negate current scrolling to 0
    2. find the element from top of the document, this will take the element to the top of the screen
    3. now put the element to the middle of the screen
    */
    let targetYOfScreen = 0.45 * window.innerHeight;
    let elementPositionWRTDocument = element.offsetTop;
    if(element.offsetParent.tagName != "BODY") {
        // the element's parent is not body, so its scrolling from top may change
        parentElement = element.offsetParent;
        elementPositionWRTDocument = parentElement.offsetTop + element.offsetTop;
    }
    document.documentElement.scrollBy( {
        top: -currentScrollPosition + elementPositionWRTDocument - targetYOfScreen, 
        left: 0,
        behavior: 'smooth'});
}

function scrollDownExtra() {
    document.documentElement.scrollBy(0,-40);
}