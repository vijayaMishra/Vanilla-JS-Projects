// 1. Create an object person with properties: name, age, and city. Print each property.

const person = {
    name: "Vijaya Tiwari",
    age: 100,
    city: "Bengaluru"
}
console.log("Hi My name is ", person["name"], " aged ", person.age, " living in ", person["city"]);

// 2. Add a new property gender to the person object dynamically.

person.gender = "F";
console.log("Person {} ", person);

// 3. Delete the city property from the person object.

delete person.city; // delete person["city"];
console.log("Person {} ", person);

// 4. Check if the key "age" exists in the object.

if("age" in person) {
    console.log("age is present");
}

// 5. Loop through all keys in the person object and print key-value pairs.

console.log("Key-value pairs are: ")
for(let key in person) {
    console.log(key + ": " + person[key]);
}

