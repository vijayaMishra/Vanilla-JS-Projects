//NOTE

// In a normal function:
//You can return an object like this:
function getPerson() {
  return {
    name: "Krishna",
    age: 16
  };
}
//return clearly tells JavaScript that an object is coming next.

//But in an arrow function, if you write:
const getPerson = () => {
  name: "Krishna",
  age: 16
};
//JavaScript does not see this as an object. Instead, it thinks:
//"You're opening a function body with {}, and inside it, you just wrote a label name:."
//This is called a labeled statement, and it doesn’t return anything!

//To fix that, we do this:
const getPerson = () => ({
  name: "Krishna",
  age: 16
});
//Now, the parentheses () tell JavaScript:
//"This is not a function body — it's an object literal you want to return directly."

//So in short:
// () => { name: "X" } Function body, not an object
// () => ({ name: "X" }) Return an object          !!!!!IMPORTANT
