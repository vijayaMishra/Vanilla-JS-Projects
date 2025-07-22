//Create a Promise that resolves to an array ["apple", "banana", "cherry"] and then print each fruit
// using .then()

let promise = new Promise(function(resolve, reject) {
    resolve(["apple", "banana", "cherry"]);
})
promise
    .then(function printEachFruit(fruits) {
        fruits.forEach(fruit => {
            console.log(fruit);
        })
    });