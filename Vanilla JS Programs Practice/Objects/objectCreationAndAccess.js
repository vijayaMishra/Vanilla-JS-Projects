//Create an object person with properties: name, age, and city. Print each property.

const person = {
    name: "Vijaya Tiwari",
    age: 100,
    city: "Bengaluru"
}
console.log("Hi My name is ", person["name"], " aged ", person.age, " living in ", person["city"]);

//Add a new property gender to the person object dynamically.

person.gender = "F";
console.log("Person {} ", person);

// Delete the city property from the person object.

delete person.city; // delete person["city"];
console.log("Person {} ", person);

// Check if the key "age" exists in the object.

if("age" in person) {
    console.log("age is present");
}

// Loop through all keys in the person object and print key-value pairs.

