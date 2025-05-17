//Write a function called calculate that takes three parameters: 
//num1, num2, and an operator (as a string like '+', '-', '*', or '/'). 
//The function should perform the correct arithmetic operation based on the operator and return the result.
function sum(n1, n2) {
    return n1+n2;
} 
function minus(n1, n2) {
    return n1-n2;
}
function multiply(n1, n2) {
    return n1*n2;
}
function divide(n1, n2) {
    return n1/n2;
}
function doCalculate( func, num1, num2) {
    return func(num1, num2);
}

let sumResult = doCalculate(sum, 10, 20);
let minusResult = doCalculate(minus, 30,10);
let multiplyResult = doCalculate(multiply, 16, 108);
let divideResult = doCalculate(divide, 100, 2);
console.log(sumResult, minusResult, multiplyResult, divideResult);