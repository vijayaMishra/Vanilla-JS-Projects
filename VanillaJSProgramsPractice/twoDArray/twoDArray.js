// add all elements of a 2 D array

const numbers = [[1,2,3],
                 [2,3,4],
                 [3,4,5]];
let sum = 0;
for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        sum = sum + numbers[i][j];
    }
}
console.log("Sum of all elements in the array: ", sum);