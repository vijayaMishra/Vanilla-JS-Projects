//create a settimeout which console logs after 1 sec
console.log("Hi");
setTimeout(function print() {
    console.log("Appears after 1 sec");
}, 1000);

//create a promise which resolves with value hi after 1 second
let promise = new Promise(function promiseCallback(resolve){
    setTimeout(function setTimeoutCallback() {
        resolve("Hi");
    }, 1000);
});
promise
    .then(function promiseThenCallback(message){
        console.log(message);
    })