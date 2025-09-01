// 11. Add a method greet to person that returns “Hello, my name is [name]”.
let person = {
    name: "Vijaya Tiwari",
    age: 334,
    city: "Goloka"
}
let age = person["age"];
// function greet() {
//     const name = "name";
//     console.log("Hello, my name is", person[name]);
// }
let greet = () => {
    const name = "name";
    console.log("Helloooo, my name is", person[name]);
}
greet();

// 12. Add a method calculateAge that returns 2025 - birthYear.

let calculateAge = () =>  {
    const currentYear = 2025;
    const birthYear = currentYear - age - 1;
    return birthYear;
}
console.log("Your birth year is =", calculateAge());

// 13. Create an object counter with a value and methods: increment, decrement, and reset.
let counter = {
    value: 12
}
let increment = () => {
    counter["value"] = counter["value"]+1;
    return counter["value"];
}
let decrement = () => {
    counter["value"] = counter["value"]-1;
    return counter["value"];
}
let reset = () => {
    counter["value"] = 0;
    return counter["value"];
}
console.log(counter["value"]);
console.log("Increment () fn call = ", increment());
console.log("Decrement () fn call= ", decrement());
console.log(reset());
increment();
console.log(counter.value);