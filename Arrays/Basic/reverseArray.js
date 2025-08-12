// Reverse an Array

// Input: [1, 2, 3, 4]

// Output: [4, 3, 2, 1]

let numbers = [1, 2, 3, 4, 5];
let reversedArray = [];
let j = numbers.length - 1;
for(let i=0; i<numbers.length; i++) {
    reversedArray.push(numbers[j]);
    j--;
}
console.log(reversedArray);

//dry run space  numbers=[1,2,3,4] reversedArray=[]
// i=0, i < 4 