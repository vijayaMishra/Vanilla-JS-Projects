document.querySelector(".numbersContainer")
    .addEventListener("click", (event)=>{
        console.log(event.target.textContent);

        // console.log(document.querySelector(".displayNumber").innerHTML);
        let numberOnScreen = document.querySelector(".displayNumber");
        console.log(numberOnScreen);
        //= event.target.textContent;
        //numberOnScreen += event.target.textContent;
        numberOnScreen.innerHTML += event.target.textContent;
    });
