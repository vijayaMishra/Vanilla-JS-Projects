//create a settimeout which console logs after 1 sec
// console.log("Hi");
// setTimeout(function print() {
//     console.log("Appears after 1 sec");
// }, 1000);

//create a promise which resolves with value hi after 1 second
// let promise = new Promise(function promiseCallback(resolve){
//     setTimeout(function setTimeoutCallback() {
//         resolve("Hi");
//     }, 1000);
// });
// promise
//     .then(function promiseThenCallback(message){
//         console.log(message);
//     })

// 2. Create a Promise that resolves after 2 seconds with "Hello, World!"
// let promise2 = new Promise(function(resolve, reject){
//     setTimeout(function resolveAfter2secs() {
//         console.log("In setTimout");
//         resolve("Hello, World!");
//     }, 2000);
// });
// console.log(promise2);
// promise2
//     .then(function(message) {
//         console.log("After 2 seconds: ", message);
//     });
// // console.log("hi");

// Create a Promise that resolves after 1 second with the message "Task Completed".
// const promise3 = new Promise(function (resolve) {
//     console.log("After 1 Sec");
//     setTimeout(function setTimeoutCallback() {
//         resolve("Task Completed");
//     }, 1000);
// })
// promise3
//     .then(function (message) {
//         console.log("1 sec is over: ", message);
//     });

//Create a Promise that rejects after 3 seconds with the message "Something went wrong".
// console.log("Hi");
// let promise4 = new Promise(function (resolve, reject) {
//     setTimeout(function rejectMessage() {
//         reject("Something went wrong!");
//     }, 3000);
// });
// promise4
//     .catch(function(error) {
//         console.log(error);
//     });

//Create a Promise that resolves immediately with the number 42.
// const promise5 = new Promise(function (resolve, reject) {
//    resolve("42");
// });
// promise5
//     .then(function(message){
//        console.log(message);
//     });

//Create a Promise that resolves with a string "Loading finished" only if a variable isLoaded is true. 
// Otherwise, reject with "Loading failed".
// let isLoaded = true;
// let promise6 = new Promise(function(resolve, reject) {
//     if(isLoaded) {
//         resolve("Loading finished");
//     } else {
//         reject("Loading failed");
//     }
// });
// promise6
//     .then(function(message) {
//         console.log(message);
//     })
//     .catch(function(error){
//         console.log(error);
//     })

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