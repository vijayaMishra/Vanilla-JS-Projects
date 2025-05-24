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

        if(event.target.textContent === "Left") {
            outerBoxElement.classList.add("moveToLeft");
        } else if(event.target.textContent === "Top Left") {
            outerBoxElement.classList.add("moveToTopLeft");
        } else if(event.target.textContent === "Top Right") {
            outerBoxElement.classList.add("moveToTopRight");
        } else if(event.target.textContent === "Bottom Right") {
            outerBoxElement.classList.add("moveToBottomRight");
        } else if(event.target.textContent === "Top Center") {
            outerBoxElement.classList.add("moveToTopCenter");
        } else if(event.target.textContent === "Bottom Center") {
            outerBoxElement.classList.add("moveToBottomCenter");
        }

    });

