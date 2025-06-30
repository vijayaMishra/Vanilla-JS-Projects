// "this" refers to the Object that is executing the current function.


const person = {
    name: "Kalindi",
    greet() {
        console.log("Hi, I am " + this.name);
    }
};
person.greet();