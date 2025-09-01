//Write a Promise that resolves after 2 seconds with a user's age. In .then(), check if the age is over 18 and log "Adult" or "Minor".

let promise = new Promise(function(resolve, reject) {
    let usersAge = 25;
    setTimeout(function tellAge() {
        resolve(usersAge);
    }, 2000);
});
promise
    .then(function(age) {
        console.log("User's age: ", age);
        return {
            age: age
        }
    })
    .then(function checkAdultOrMinor(age) {
        if(age.age >= 18) {
            console.log(age.age + " is an Adult");
        } else {
            console.log(age.age + " is a Minor");
        }
    })