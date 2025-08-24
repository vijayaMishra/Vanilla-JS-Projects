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
inputElement2.classList.add("submit");
containerElement.appendChild(inputElement2);

const messageElement = document.createElement("p");
containerElement.appendChild(messageElement);

document.querySelector(".submit").addEventListener("click", function onClickHandler() {
    var userInputNumber = Number(document.querySelector(".inputBox").value);
    const countOfNo = getOccurences(userInputNumber);
    if(countOfNo !== 0) {
        messageElement.textContent = `The ${userInputNumber} no. count is ${countOfNo}`;
    } else {
        messageElement.textContent = `${userInputNumber} does not exist.`;
    }
    
});

function getOccurences(number) {
    let count = 0;
    for(let i=0; i < array1.length; i++) {
        if(array1[i] === number) {
            count++;
        }
    }
    console.log("count ", count);
    return count;
}