// Count Even and Odd Numbers

// Input: [1, 2, 3, 4, 5, 6]

// Output: Even: 3, Odd: 3

let numbers = [1, 2, 3, 4, 5, 6];
let evenCount = 0;
let oddCount = 0;
for(let i=0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}
console.log(`There are ${evenCount} even numbers and ${oddCount} odd numbers`);