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

//find sum of first row
let sumFirstRow = 0;
for(let col = 0; col < 3; col++) {
    sumFirstRow += numbers[0][col];
}
console.log(sumFirstRow);

//WAF to take row as input and return sum of that row
function calculateRowSum(numbers, row) {
    let sumOfRow = 0;
    for(let col = 0; col < 3; col++) {
        sumOfRow = sumOfRow + numbers[row][col];
    }
    return sumOfRow;
}
console.log("Sum of first row: ", calculateRowSum(numbers, 0));
console.log("Sum of second row: ", calculateRowSum(numbers, 1));
console.log("Sum of third row: ", calculateRowSum(numbers, 2));