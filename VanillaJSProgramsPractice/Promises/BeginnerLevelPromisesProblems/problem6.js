//Create a Promise that resolves with a string "Loading finished" only if a variable isLoaded is true. 
// Otherwise, reject with "Loading failed".
let isLoaded = true;
let promise6 = new Promise(function(resolve, reject) {
    if(isLoaded) {
        resolve("Loading finished");
    } else {
        reject("Loading failed");
    }
});
promise6
    .then(function(message) {
        console.log(message);
    })
    .catch(function(error){
        console.log(error);
    })