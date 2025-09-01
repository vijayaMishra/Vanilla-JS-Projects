//Original Array
let array1 = [1, 2, 3, 4, 5];
console.log(array1);

//Approach 1
array1.reverse();
console.log(array1);

//Approach 2
let reversedArray = [];
let j = array1.length - 1;
for(let i=0; i < array1.length; i++) {
    reversedArray[i] = array1[j];
    j--;
}
console.log("Reversed array: ", reversedArray);

//Approach 3
