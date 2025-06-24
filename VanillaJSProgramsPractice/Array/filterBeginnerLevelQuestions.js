// Filter by age

const people = [
    { name: "Yamuna", age: 21 },
    { name: "Krishna", age: 16 },
    { name: "Kalindi", age: 45 }
];

console.log(people.filter(person => { return person.age >= 18; } ));

//Filter by Completed Task
const tasks = [
    { task: "Offer Tulasi", completed: true },
    { task: "Clean Altar", completed: false },
    { task: "Chant Rounds", completed: true }
];
const completedTaskArray = tasks.filter(completedTask => completedTask.completed === true);
console.log("Completed Tasks: ", completedTaskArray);

console.log(tasks.filter(function(completedTask) {
    return completedTask.completed === true;
}));