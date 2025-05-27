document.querySelector(".numbersContainer")
    .addEventListener("click", (event)=>{
        console.log(event.target.textContent);
    console.log(event);
        // console.log(document.querySelector(".displayNumber").innerHTML);
        let numberOnScreen = document.querySelector(".displayNumber");
        console.log(numberOnScreen);
        //= event.target.textContent;
        //numberOnScreen += event.target.textContent;
        //console.log("event.target.tagName",event.target.tagName);
        if(event.target.tagName === "BUTTON") {
            numberOnScreen.innerHTML += event.target.textContent;
        }
        // console.log("event.target",event.target);
    });
