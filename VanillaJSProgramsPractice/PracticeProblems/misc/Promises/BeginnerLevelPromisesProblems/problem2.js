// 2. Create a Promise that resolves after 2 seconds with "Hello, World!"
let promise2 = new Promise(function(resolve, reject){
    setTimeout(function resolveAfter2secs() {
        console.log("In setTimout");
        resolve("Hello, World!");
    }, 2000);
});
console.log(promise2);
promise2
    .then(function(message) {
        console.log("After 2 seconds: ", message);
    });
// console.log("hi");