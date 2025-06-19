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
let copiedPerson2 = Object.assign({}, person);
copiedPerson2.age = 16;
console.log(person);
console.log(copiedPerson2);

// 16. Show how changes in nested properties affect original vs. copied object.

let devotee1 = {
    name: "Shyam",
    age: 21,
    address: {
        city: "Braj",
        pin: 281001
    }
}
console.log("Devotee1", devotee1);
let devotee2 = { ...devotee1 };
console.log(devotee2);

devotee1.name = "Priyaju";
console.log(devotee1.name);
console.log(devotee2.name);

devotee1.address.city = "Barsana";
console.log(devotee2.address.city);
console.log(devotee1.address.city);