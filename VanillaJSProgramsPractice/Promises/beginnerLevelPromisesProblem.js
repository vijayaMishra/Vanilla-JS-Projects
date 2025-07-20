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
const promise3 = new Promise(function (resolve) {
    console.log("After 1 Sec");
    setTimeout(function setTimeoutCallback() {
        resolve("Task Completed");
    }, 1000);
})
promise3
    .then(function (message) {
        console.log("1 sec is over: ", message);
    });


// 2. Create a function isEvenNumber(num) that returns a Promise
// 3. Simulate an API call using a Promise
// 4. Chaining Promises:
// 5. Write a Promise that simulates a login check