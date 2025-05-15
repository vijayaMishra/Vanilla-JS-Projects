const leftButtonElement = document.querySelector(".leftButton");
let outerBoxElement = document.querySelector(".outer-box");
leftButtonElement.addEventListener("click", function() {
    //console.log(" left button: ", leftButton);
    //console.log(" element class list", leftButton.classList);
    outerBoxElement.classList.remove("moveToTopLeft");
    outerBoxElement.classList.remove("moveToTopRight");
    outerBoxElement.classList.remove("moveToBottomRight");
    outerBoxElement.classList.remove("moveToTopCenter");
    outerBoxElement.classList.remove("moveToBottomCenter");
    outerBoxElement.classList.add("moveToLeft");
});

const topLeftButtonElement = document.querySelector(".topLeftButton");
topLeftButtonElement.addEventListener("click", function() {
    console.log("inside top left button");
    outerBoxElement.classList.remove("moveToLeft");
    outerBoxElement.classList.remove("moveToTopRight");
    outerBoxElement.classList.remove("moveToBottomRight");
    outerBoxElement.classList.remove("moveToTopCenter");
    outerBoxElement.classList.remove("moveToBottomCenter");
    outerBoxElement.classList.add("moveToTopLeft");
});

const topRightButtonElement = document.querySelector(".topRightButton");
topRightButtonElement.addEventListener("click", function() {
    outerBoxElement.classList.remove("moveToLeft");
    outerBoxElement.classList.remove("moveToTopLeft");
    outerBoxElement.classList.remove("moveToBottomRight");
    outerBoxElement.classList.remove("moveToTopCenter");
    outerBoxElement.classList.remove("moveToBottomCenter");
    outerBoxElement.classList.add("moveToTopRight");
});

const bottomRightElement = document.querySelector(".bottomRightButton");
bottomRightElement.addEventListener("click", function() {
    outerBoxElement.classList.remove("moveToLeft");
    outerBoxElement.classList.remove("moveToTopLeft");
    outerBoxElement.classList.remove("moveToTopRight");
    outerBoxElement.classList.remove("moveToTopCenter");
    outerBoxElement.classList.remove("moveToBottomCenter");
    outerBoxElement.classList.add("moveToBottomRight");
});

const topCenterElement = document.querySelector(".topCenterButton");
topCenterElement.addEventListener("click", function() {
    outerBoxElement.classList.remove("moveToLeft");
    outerBoxElement.classList.remove("moveToTopLeft");
    outerBoxElement.classList.remove("moveToTopRight");
    outerBoxElement.classList.remove("moveToBottomRight");
    outerBoxElement.classList.remove("moveToBottomCenter");
    outerBoxElement.classList.add("moveToTopCenter");
});

const bottomCenterElement = document.querySelector(".bottomCenterButton");
bottomCenterElement.addEventListener("click", function() {
    outerBoxElement.classList.remove("moveToLeft");
    outerBoxElement.classList.remove("moveToTopLeft");
    outerBoxElement.classList.remove("moveToTopRight");
    outerBoxElement.classList.remove("moveToBottomRight");
    outerBoxElement.classList.remove("moveToTopCenter");
    outerBoxElement.classList.add("moveToBottomCenter");
});