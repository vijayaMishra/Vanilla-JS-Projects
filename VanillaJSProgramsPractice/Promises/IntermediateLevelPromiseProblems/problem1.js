//function chain
function getFirstName() {
    let firstName = "Vijaya";
    console.log(firstName);
    return {
        getLastName: getLastName
    }
}
function getLastName() {
    let lastName = "Ankit";
    console.log(lastName);
    return lastName;
}
console.log(getFirstName());
console.log(getFirstName().getLastName);
console.log(getFirstName().getLastName());

//Create a Promise that resolves to an array ["apple", "banana", "cherry"] and then print each fruit using .then()


//Simulate an API call that returns a user's details (object with name and email). Use .then() to log both values.


//Write a Promise that resolves with "Download started". Chain a second .then() that waits 1 second and then logs "Download complete" using another setTimeout.


