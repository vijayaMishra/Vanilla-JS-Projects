// Reverse an Array

// Input: [1, 2, 3, 4]
// Output: [4, 3, 2, 1]

//Brute force approach
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

//with no extra space
let array = [1,2,3,4,5];
console.log("Original Array: ", array);
let jj = array.length -1;
for(let i = 0; i < array.length; i++) {
    if(i < jj) {
        let temp = array[i];
        array[i] = array[jj];
        array[jj] = temp;
        jj--;
    }
}
console.log("After reverse logic: ", array);

let array1 = [10, 20, 30, 40, 50];
array1.reverse();
console.log(array1);