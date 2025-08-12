// Reverse an Array

// Input: [1, 2, 3, 4]
// Output: [4, 3, 2, 1]

//Brute force approach
let numbers = [1, 2, 3, 4, 5];
let reversedArray = [];
let jjj = numbers.length - 1;
for(let i=0; i<numbers.length; i++) {
    reversedArray.push(numbers[jjj]);
    jjj--;
}
console.log(reversedArray);
//Time Complexity: O(n)
//Space complexity: O(n) a new array is being created

//dry run space  numbers=[1,2,3,4] reversedArray=[]
// i=0, i < 4 

//with no extra space Using Two Pointers approach
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
//Time Complexity O(n)
//Space Complexity Only jj new variable is created new O(1)

//One liner
let array1 = [10, 20, 30, 40, 50];
array1.reverse();
console.log(array1);
//Time complexity O(n) 
// Space Complexity O(1) (in-place)
// Good for: Quick Reversal (but it mutates the array)

//Using recursion
let i = 0;
let j = array.length - 1;
function reverseArray(array, i, j) {
    if(i < j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
        j--;
    }
    return reverseArray(array, i, j);;
}
console.log("Reversed Array is: ", reverseArray(array, i, j));
//Dry Run space
// line #58 reverseArray(array, 0, 4)  array = [1,2,3,4,5]
// line #48 if(0 < 4) { temp = array[0] = 1; arr[0] = array[4] = 5; array[4] = 1} array = [5, 2, 3, 4, 1] i=1 j=4 return ([5,2,3,4,1], 1, 3)
// from line #56, reverseArray again got called, this time  1 < 4, temp=2 , array[1]=array[3]=4 , array[3] = 2 return ([5,4,3,2,1], 2, 2)
// line #48 reversearray(array,2,2) 2<2 False, it breaks out of the if condition and we get reverseArray as [5,4,3,2,1]
