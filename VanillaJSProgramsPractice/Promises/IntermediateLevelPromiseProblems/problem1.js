//function chain
function getFirstName() {
    let firstName = "Vijaya";
    console.log(firstName);
}
function getLastName() {
    let lastName = "Ankit";
    console.log(lastName);
}
console.log(getFirstName().getLastName());

//Chain .then() methods to take a resolved number and double it, then log the result.


//Write a Promise that resolves after 2 seconds with a user's age. In .then(), check if the age is over 18 and log "Adult" or "Minor".


//Create a Promise that resolves to an array ["apple", "banana", "cherry"] and then print each fruit using .then()


//Simulate an API call that returns a user's details (object with name and email). Use .then() to log both values.


//Write a Promise that resolves with "Download started". Chain a second .then() that waits 1 second and then logs "Download complete" using another setTimeout.


