// The filter() method is used on arrays to create a new array containing only the elements that pass a test
// (a condition you define)

//SYNTAX
// array.filter(function(element) {
//
// });

//Using Arrow Function

// array.filter(element => condition);

// How it works?
// Filter loops through every item in your array.
// For each item, it runs your test (the function you give)
// If the test returns 'true', that
//BEGINNER LEVEL
// Filter by Age

//filter() goes one by one through the people array.
//
// For Radha → 21 >= 18 → true → ✅ included.
//
// For Krishna → 16 >= 18 → false → ❌ skipped.
//
// For Yashoda → 45 >= 18 → true → ✅ included.
//
// It returns a new array of only those people who passed the condition.

const people = [
    { name: "Subala", age: 21 },
    { name: "Krishna", age: 16 },
    { name: "Yamuna", age: 45 }
];

const adults = people.filter(person => person.age >= 18);
console.log("Adults: ", adults);

//Q: Filter all people who are 18 or older.
let above18 = [];
for(let i=0; i < people.length; i++) {
    if(people[i].age > 18) {
        above18.push(people[i]);
    }
}
console.log(above18);

console.log("USING FILTER");
people.filter(person => person.age >= 18)