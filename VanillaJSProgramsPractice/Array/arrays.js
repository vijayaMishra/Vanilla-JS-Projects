let users = [
    { name: "Radha", age: 25 },
    { name: "Krishna", age: 30 }
];
//Print the name of the first user.
// How to change Krishna’s age to 31?

console.log("Name of first user: ", users[0].name);
users[1].age = 31;
console.log(users);

let products = [
    { id: 1, price: 50 },
    { id: 2, price: 70 }
];

// Add a new product { id: 3, price: 90 } to the array.
products.push({ id: 3, price: 90 });
console.log(products);

// Find the total number of objects in the array:
console.log(users.length);

let books = [
  { title: "Gita", pages: 700 },
  { title: "Bhagavatam", pages: 1200 },
  { title: "Ramayan", pages: 1000 }
];
console.log(books.length);

//Given an array of students: Filter students with marks above 80. Get an array of only names.
let students = [
    { name: "Lalita", marks: 85 },
    { name: "Vishakha", marks: 92 },
    { name: "Rukmini", marks: 78 }
];
// Get an array of only names.
let namesArray = [];
let marksAbove80 = [];
for(let i = 0; i < students.length; i++) {
     namesArray.push(students[i].name);
     if(students[i].marks > 80) {
         marksAbove80.push(students[i].name + " with marks : " + students[i].marks);
     }
}
console.log("An array of all names: ", namesArray);
console.log("An array of marks above 80: ", marksAbove80);
// Filter students with marks above 80.











