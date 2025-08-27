let numberElement = document.querySelector(".number");
let number = numberElement.textContent;

const roundsElement = document.querySelector(".rounds");
let rounds = 0;

const btnplus = document.querySelector(".btn-plus-sign");
btnplus.addEventListener("click", function() {
    if(number === 5 ) {  
        number = 0;
        rounds++;
        roundsElement.textContent = "Rounds = " + rounds;
    }
    if(number < 5) {
        number++;
        numberElement.textContent = number;
    } 
    
});
const btnminus = document.querySelector(".reset");
btnminus.addEventListener("click", function() { 
    if(number > 0) {
        number--;
    }
    numberElement.textContent = number;
})
