const startButtonElement = document.querySelector(".startButton");
startButtonElement.addEventListener("click", (e) => {
    const clockNumberElement = document.querySelector(".clockNumber");
    for(let i=0; i<60; i++) {
        setTimeout(() => {
            clockNumberElement.textContent++;
        }, i*1000);
    }
});