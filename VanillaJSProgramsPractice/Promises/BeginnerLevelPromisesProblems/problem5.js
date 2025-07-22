//Create a Promise that resolves immediately with the number 42.
const promise5 = new Promise(function (resolve, reject) {
   resolve("42");
});
promise5
    .then(function(message){
       console.log(message);
    });