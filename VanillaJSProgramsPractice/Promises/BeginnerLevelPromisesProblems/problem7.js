
//Write a Promise that simulates fetching a username from a database after 2 seconds and returns "user123" on success.
let promise7 = new Promise(function(resolve, reject) {
    console.log("Timer of 2 secs is on");
    setTimeout(function fetchName() {
        resolve("user123");
    }, 2000);
});
promise7
    .then(function(message) {
        console.log("After 2 secs:", message);
    })

// 2. Create a function isEvenNumber(num) that returns a Promise
// 3. Simulate an API call using a Promise
// 4. Chaining Promises:
// 5. Write a Promise that simulates a login check