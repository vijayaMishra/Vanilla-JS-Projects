//1. Create a Promise that resolves after 2 seconds with "Hello, World!"
let condition = true;
let promise = new Promise(function(resolve, reject){
    setTimeout(function resolveAfter2secs() {
        if (condition) {
            resolve("Hello, World!");
        } else {
            reject("Not printing anything");
        }
    }, 2000);
});
promise
    .then(function(message) {
        console.log("After 2 seconds: ", message);
    })
    .catch(function(error) {
        console.log("Failure: ", error);
    });

// 2. Create a function isEvenNumber(num) that returns a Promise


// 3. Simulate an API call using a Promise


// 4. Chaining Promises:



// 5. Write a Promise that simulates a login check