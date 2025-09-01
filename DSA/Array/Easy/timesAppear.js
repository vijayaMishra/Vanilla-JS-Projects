//Count how many times a number appears in an array.

//Thought process, iterate through each element in the array, maintain a count, once that element is found,
// increase the count by 1

let array1 = [10, 20, 30, 30, 40, 50, 30, 50];

let count = 0;
let noToBeChecked = 30;

for(let i=0; i < array1.length; i++) {
    if(array1[i] === noToBeChecked) {
        count++;
    }
}
console.log(`The number ${noToBeChecked} appeared ${count} no. of times`);