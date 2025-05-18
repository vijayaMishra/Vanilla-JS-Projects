let outerBoxElement = document.querySelector(".outer-box");

function movePosition(classPosition) {
    outerBoxElement.classList.remove("moveToLeft", "moveToTopLeft", "moveToTopRight", "moveToBottomRight", "moveToTopCenter", "moveToBottomCenter");
    outerBoxElement.classList.add(classPosition);

}

const leftButtonElement = document.querySelector(".leftButton");
leftButtonElement.addEventListener("click", function () {
    movePosition("moveToLeft");
});

const topLeftButtonElement = document.querySelector(".topLeftButton");
topLeftButtonElement.addEventListener("click", function() {
    movePosition("moveToTopLeft");
});

const topRightButtonElement = document.querySelector(".topRightButton");
topRightButtonElement.addEventListener("click", function() {
    movePosition("moveToTopRight");
});

const bottomRightElement = document.querySelector(".bottomRightButton");
bottomRightElement.addEventListener("click", function() {
    movePosition("moveToBottomRight");
});

const topCenterElement = document.querySelector(".topCenterButton");
topCenterElement.addEventListener("click", function() {
    movePosition("moveToTopCenter");
});

const bottomCenterElement = document.querySelector(".bottomCenterButton");
bottomCenterElement.addEventListener("click", function() {
    movePosition("moveToBottomCenter");
});
