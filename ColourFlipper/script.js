const colours = ["#D6E58D", "#BCD8EC", "#DCCCEC", "#FFCBE1", "#FFDAB4", "#F9E1A8"]
console.log(colours);

const btn = document.getElementById("btn");
const colour = document.querySelector(".colour");

btn.addEventListener("click", function() {
    //  console.log(document.body);
    const randomNumber = getRandomNumber();
    console.log(randomNumber, colours[randomNumber]);
    const currentRandomNumber = colours[randomNumber];
    const elementHavingContainerClass = document.querySelector('.container');
    elementHavingContainerClass.style.backgroundColor = currentRandomNumber;

    const elementHavingColourClass = document.querySelector(".colour");
    elementHavingColourClass.style.color = currentRandomNumber;

    //document.querySelector("#ffcbe1")
    elementHavingColourClass.innerHTML = colours[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colours.length);
}
