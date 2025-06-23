const person = {
    name: "Hari",
    city: "Bengaluru",
    age: 10
}
console.log("person", person);

const numberOfElementsInPersonObject = Object.keys(person).length;
for(let i = 0; i < numberOfElementsInPersonObject; i++) {
    console.log(Object.keys(person));
}

for(let key in person) {
    console.log(key + ": " + person[key]);
}
console.log("person['city']", person["city"]);

// 20. Use Object.keys() to list all keys of an object.
const keys = Object.keys(person);
console.log("Object.keys(person)", keys);

//Get values using an array of keys
const values = keys.map(key => {
    return person[key];
})
console.log("accessing values using only keys:", values);

// 21. Use Object.values() to get all values.
const values1 = Object.values(person);
console.log("Object.values(person)", values1);

// 22. Use Object.entries() to convert an object to an array of [key, value] pairs.
const keyValuePairs = Object.entries(person);
console.log("Converting an object to an array of [key, value] pairs using Object.entries()", keyValuePairs);

console.log("Current key array:", keys);

const values2 = keyValuePairs.map(keyValuePair => keyValuePair[1]);
console.log("Value from keyValuePair", values2);

// 23. Convert the [key, value] array back to an object using Object.fromEntries().
//not required
const originalObject = Object.fromEntries(keyValuePairs);
console.log("Object.fromEntries(keyValuePairs)", originalObject);

