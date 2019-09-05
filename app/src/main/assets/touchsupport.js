let UP_RIGHT_THRESHOLD = 20;
let UP_LEFT_THRESHOLD = 160;
let DOWN_RIGHT_THRESHOLD = 340;
let DOWN_LEFT_THRESHOLD = 200;
let HORIZONTAL_DRAG_THRESHOLD = 60;

let upPool = 0;
let downPool = 0;
let rightPool = 0;
let leftPool = 0;

function resetPools() {
    upPool = downPool = rightPool = leftPool = 0;
}

function processDirection(fromOrigin, currentDirection) {
    if(isUP(fromOrigin) && isUP(currentDirection)) {
        upPool++;
    }
    else if(isDOWN(fromOrigin) && isDOWN(currentDirection)) {
        downPool++;
    }
    else if(isLEFT(fromOrigin) && isLEFT(currentDirection)) {
        leftPool++;
    }
    else if(isRIGHT(fromOrigin) && isRIGHT(currentDirection)) {
        rightPool++;
    }
}

function isUP(angle) {
    if(angle > UP_RIGHT_THRESHOLD && angle <UP_LEFT_THRESHOLD) {
        return true;
    } 
    return false;
}

function isDOWN(angle) {
    if(angle > DOWN_LEFT_THRESHOLD && angle < DOWN_RIGHT_THRESHOLD) {
        return true;
    }
    return false;
}

function isRIGHT(angle) {
    if(angle > DOWN_RIGHT_THRESHOLD || angle < UP_RIGHT_THRESHOLD) {
        return true;
    }
    return false;
}

function isLEFT(angle) {
    if(angle > UP_LEFT_THRESHOLD && angle < DOWN_LEFT_THRESHOLD) {
        return true;
    }
    return false;
}

function getUpPool() {
    return upPool;
}

function getDownPool() {
    return downPool;
}

function getLeftPool() {
    return leftPool;
}

function getRightPool() {
    return rightPool;
}

function isLeftPoolMax() {
    if(leftPool > rightPool && leftPool > upPool && leftPool > downPool) {
        return true;
    }
    return false;
}

function isRightPoolMax() {
    if(rightPool > leftPool && rightPool > upPool && rightPool > downPool) {
        return true;
    }
    return false;
}

function isUpPoolMax() {
    if(upPool>downPool && upPool > rightPool && upPool > leftPool) {
        return true;
    }
    return false;
}

function isDownPoolMax() {
    if(downPool>upPool && downPool>rightPool && downPool>leftPool) {
        return true;
    }
    return false;
}