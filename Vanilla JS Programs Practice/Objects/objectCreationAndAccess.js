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