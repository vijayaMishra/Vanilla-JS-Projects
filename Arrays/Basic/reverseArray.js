// Reverse an Array

// Input: [1, 2, 3, 4]

// Output: [4, 3, 2, 1]

let numbers = [1, 2, 3, 4];
let reversedArray = [];
let lastIndex = numbers.length - 1;
for(let i=0; i < numbers.length; i++) {
    reversedArray[i] = numbers[lastIndex];
    let temp = numbers[lastIndex];
    numbers[i] = temp;
}

//dry run space  numbers=[1,2,3,4] reversedArray=[]
// i=0, i < 4 