// Find the Maximum Element

// Input: [10, 5, 20, 8]

// Output: 20

let array = [10, 5, 20, 8];
let maximum = array[0];

function findMaximumNo(array, maximum) {
    for(let i=0; i<array.length; i++) {
        if(array[i] > maximum) {
            maximum = array[i];
        }
    }
    return maximum;
}
console.log("Maximum no. of the array is: ", findMaximumNo(array, maximum));