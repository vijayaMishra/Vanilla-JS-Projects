//Chain .then() methods to take a resolved number and double it, then log the result.

let promise = new Promise(function(resolve, reject) {
   resolve(2);
});
promise
    .then(function(number) {
        console.log(number);
        return {
            number1: number*number
        }
    })
    .then(function(number) {
        console.log("Squared number is: ", number.number1);
    })
