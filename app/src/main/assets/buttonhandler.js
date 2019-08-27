function setButtonActive(bId) {
    let buttonElement = document.getElementById(bId);
    buttonElement.className = buttonElement.className.replace("", "active");
}

function unsetButtonActive(bId) {
    let buttonElement = document.getElementById(bId);
    if(buttonElement.className == "active") {
        buttonElement.className = buttonElement.className.replace("active", "");
    }
}

function toggleButton(iconId, textId) {
    let spanTextElement = document.getElementById(textId);
    let spanIconElement = document.getElementById(iconId);
    spanIconElement.removeChild(spanIconElement.firstElementChild);
    let iconElement = document.createElement('i');
    let currentText = spanTextElement.textContent;
    if(currentText == "Play") {
        // change it to pause
        spanTextElement.textContent = "Pause";
        iconElement.className = iconElement.className.replace("", "fas fa-pause");
    }
    else if(currentText == "Pause") {
        // change it to play
        spanTextElement.textContent = "Play";
        iconElement.className = iconElement.className.replace("", "fas fa-play");
    }
    iconElement.style.fontSize = "1.5em";
    spanIconElement.appendChild(iconElement);
}