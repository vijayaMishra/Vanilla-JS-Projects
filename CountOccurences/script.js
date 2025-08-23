//Count how many times a number appears in an array.

//Thought process, iterate through each element in the array, maintain a count, once that element is found,
// increase the count by 1

let array1 = [10, 20, 30, 30, 40, 50, 30, 50];
const containerElement = document.createElement("div");
containerElement.classList.add("container");
document.body.appendChild(containerElement);

const pElement = document.createElement("p");
pElement.classList.add("array");
pElement.textContent = "Array = [" + array1 + "]";
containerElement.appendChild(pElement);

const inputElement1 = document.createElement("input");
inputElement1.classList.add("inputBox")
inputElement1.type = "number";
inputElement1.placeholder = "Enter the number";
containerElement.appendChild(inputElement1);

const inputElement2 = document.createElement("input");

inputElement2.type = "submit";
inputElement2.value = "Submit";
containerElement.appendChild(inputElement2);
inputElement2.classList.add("submit");

document.querySelector(".submit").addEventListener("click", function onClickHandler() {
    var userInput = Number(document.querySelector(".inputBox").value);
    //console.log("User Input: ", Number(userInput));
    const pElement2 = document.createElement("p");
    pElement2.textContent = "The no.  entered by user appeared this no. of times = ";
    containerElement.appendChild(pElement2);

    const noOfTimesAppearedElement = document.createElement("p");
    noOfTimesAppearedElement.textContent = getOccurences(userInput);
    containerElement.appendChild(noOfTimesAppearedElement);
});

function getOccurences(number) {
    let count = 0;

    for(let i=0; i < array1.length; i++) {
        if(array1[i] === number) {
            count++;
            console.log(count);
        }
    }
    console.log("count ", count);
    return count;
}
//console.log(`The number ${noToBeChecked} appeared ${count} no. of times`);