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