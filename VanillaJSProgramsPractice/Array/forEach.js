// forEach() is used to iterate over array elements and perform side-effects like 
//printing, modifying variables, etc. [It does not return a new array.]

const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2));

// map() : Used to transform each item and return a new array

const numbers1 = [1, 2, 3];
const numbersAlteredByMap = numbers1.map(num => num*num);
console.log("Number Array = ", numbers1);
console.log("Numbers1 array: ", numbersAlteredByMap);

// 🔹 Beginner Level (Understand Basics)
//Double the Numbers using .map()

const nums = [1, 2, 3, 4];
const doubledNum = nums.map(num => num*2);
console.log("Doubled Numbers: ", doubledNum);

// Print each fruit with a message using .forEach()
const fruits = ['apple', 'banana', 'mango'];

//writing only fruits names
console.log("Only fruit names: ");
fruits.forEach(fruit => console.log(fruit));

// Output:
// I like apple
// I like banana
// I like mango
fruits.forEach(fruit => {
    console.log(`I like ${fruit}`);
})

// Q. 3 Convert all strings to uppercase using .map()
const words = ['hello', 'world'];
// Output: ['HELLO', 'WORLD']

const upperCaseWords = words.map(word => word.toUpperCase());
console.log("Upper case words: ", upperCaseWords);

// Add index to each item using .map()
const names = ['Keshav', 'Kalindi'];
// Output: ['0: Keshav', '1: Kalindi']

const indexedArray = names.map((name, index) => `${index}:${name}`);
console.log("Indexed Array: ", indexedArray);

// INTERMEDIATE LEVEL (with objects)
// Get list of names using .map()
const people = [
  { name: 'Gopal', age: 22 },
  { name: 'Mohan', age: 18 }
];
// Output: ['Gopal', 'Mohan']
console.log(people.map(person => person.name));

// Log only the adults using .forEach()
const adults = people.forEach(person => {
    if(person.age >= 18) {
        console.log(person.name);
    }
});
console.log("Adults = ", adults) //undefined

const adults1 = people.forEach(person => {
    if(person.age >= 18) {
        return person.name;
    }
});
console.log("Adults = ", adults1); // undefined
// the above two code for adult does not work - because .forEach() is meant for side effects (like console.log()), not for returning values.

//You cannot use .forEach() to create and return a new array directly. But...
// You can manually build an array inside .forEach() by pushing items to it.

//Example: Using .forEach() to collect adults manually
const adults2 = [];
people.forEach(person => {
    adults2.push(person.name);
})
console.log("Adults array = ", adults2);

//Why this works? .forEach() doesn't return anything. But you're manually building adults[] array 
//by pushing values when the conditions are met.

//Create a new array with name and isAdult field using .map()
const people1 = [
  { name: 'Sita', age: 16 },
  { name: 'Mandavi', age: 15 },
  { name: 'Urmila', age: 18},
  { name: 'Shrutakirti', age: 23}
];
// Output:
// [
//   { name: 'Sita', isAdult: false },
//   { name: 'Mandavi', isAdult: false },
//   { name: 'Urmila', isAdult: true },
//   { name: 'Shrutakirti', isAdult: true },
// ]
const peopleWithNewPropertyArray = people1.map(person => ({
    name: person.name,
    isAdult: person.age >= 18
}));
console.log("People with new propery i.e., isAdult added array is: ", peopleWithNewPropertyArray);

// ADVANCED LEVEL (Nested / Combined Usage)
//Using .map() on nested arrays: flatten and double values
const nums1 = [[1, 2], [3, 4]];
// Output: [2, 4, 6, 8]



//Count how many people are adults using .forEach()
const group = [
  { name: 'Hari', age: 15 },
  { name: 'Lalita', age: 30 },
  { name: 'Madhav', age: 19 }
];
// Output: 2 adults




//Modify array of prices by adding 18% GST using .map()
const prices = [100, 200, 300];
// Output: [118, 236, 354]


