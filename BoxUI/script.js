//there should be one event  listener which will listen
let outerBoxElement = document.querySelector(".outer-box");
document.querySelector(".buttonContainer")
    .addEventListener("click", function clickHandler(event) {
        // console.log("Event +_+ ", event);
        outerBoxElement.classList.remove(
            "moveToLeft",
            "moveToTopLeft",
            "moveToTopRight",
            "moveToBottomRight",
            "moveToTopCenter",
            "moveToBottomCenter"
        );
        outerBoxElement.classList.add(event.target.dataset.addClass);

    });

