// TO make function Chaining possible, we need:
// 1. An object (or a class) that contains these functions
// 2. Each function should return "this" (i.e., the same object) so the next can be called
let name = "Ankit"
const person = {
    name: name,
    getFirstName: getFirstName
}
// console.log(person);
function getFirstName() {
    console.log("Vijaya");
}
function getLastName() {
    console.log("Ankit");
}
function getLastNameObject() {
    return {
        getLastName:getLastName
    }
}
console.log(getLastNameObject().getLastName());