// WAP that accepts an operator as an argument and
//applies it to two given numbers.

// function acceptOperators() {
//     console.log(1 + op + 2);
// }
// let op = '+';
// acceptOperators(op);

function acceptOperators(op) {
    let result;
    if(op === '+') {
        result = 1+2;
    } else if (op === '-') {
        result = 2-1;
    } else if (op === '*') {
        result = 2*3;
    } else if(op === '/') {
        result = 6/2;
    }
    return result;
}

let operand = '+';
const finalResult = acceptOperators(operand);
console.log(finalResult);