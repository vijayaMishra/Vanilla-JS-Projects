// Find the Sum of All Elements in an Array

// Input: [1, 2, 3, 4]

// Output: 10

let array = [1, 2, 3, 4];
let totalSum = 0;

for(let i=0; i< array.length; i++) {
    totalSum = totalSum + array[i];
}
console.log("Sum of all elements is: ", totalSum);