// add all elements of a 2 D array

const numbers = [[1,2,25],
                 [2,30,4],
                 [12,14,8]];
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

//return sum of column elements
function calculateColumnSum(numbers, col) {
    let sumOfCol = 0;
    for(let row = 0; row < 3; row++) {
        sumOfCol = sumOfCol + numbers[row][col];
    }
    return sumOfCol;
}
console.log("Sum of first column: ", calculateColumnSum(numbers, 0));
console.log("Sum of second column: ", calculateColumnSum(numbers, 1));
console.log("Sum of third column: ", calculateColumnSum(numbers, 2));

//sum of diagonal elements
function sumOfDiagonalNumbers(numbers) {
    let leftDiagonalSum, rightDiagonalSum = 0;
    leftDiagonalSum = numbers[0][0] + numbers[1][1] + numbers[2][2];
    rightDiagonalSum = numbers[0][2] + numbers[1][1] + numbers[2][0];
    return [leftDiagonalSum,rightDiagonalSum];
}
console.log("Sum of diagonal elements: ", sumOfDiagonalNumbers(numbers));

//sum of all boundary elements