//Create a Promise that rejects after 3 seconds with the message "Something went wrong".
// console.log("Hi");
let promise4 = new Promise(function (resolve, reject) {
    setTimeout(function rejectMessage() {
        reject("Something went wrong!");
    }, 3000);
});
promise4
    .catch(function(error) {
        console.log(error);
    });