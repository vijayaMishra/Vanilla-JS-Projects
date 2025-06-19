let person = {
    name: "Vijaya Tiwari",
    age: 334,
    city: "Braj"
}
// 14. Clone the person object using the spread operator and change the name in the clone.
//Clone using spread operator

let clonedPerson = { ...person };
clonedPerson.name = "Gandharvika";
console.log("Cloned Person", clonedPerson);

// 15. Use Object.assign() to create a shallow copy of an object and modify a property.


// 16. Show how changes in nested properties affect original vs. copied object.

