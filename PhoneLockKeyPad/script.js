const password = "220898";
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
            if(numberOnScreen.innerHTML.length < 6) {
                numberOnScreen.innerHTML += event.target.textContent;
            } else {
                showToast();
            }
        }
        if(numberOnScreen.innerHTML === password) {
            const displayNumberELement = document.querySelector(".displayNumber");
            displayNumberELement.classList.remove("displayNumber");
            displayNumberELement.classList.add("displayGreenNumber");
        }
        console.log(numberOnScreen.innerHTML);

        // console.log("event.target",event.target);
    });
