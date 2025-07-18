```Promise```

A Promise is a special JavaScript object that represents a task that will finish in the future – either successfully or with an error.

```Example```
Imagine ordering food online. You place the order → now you wait → the order is either delivered (success) or cancelled (failure). That whole waiting process is a Promise.

```Why Promises?```
In JavaScript, tasks like fetching data from a server, reading files, or waiting for a timer are asynchronous. Instead of stopping everything and waiting, JavaScript uses Promises to handle these events.

```Promise Syntax```
let promise = new Promise(function (resolve, reject) {
    if(success) {
        resolve("Success!");
    } else {
        reject("Error!");
    }
}

```Learnings```
=> Learning that I did not pass function to .then() method and catch() method but they accept a function 
=> and second learning is when checking if condition, for the condition I had written promise in "if condition" instead it had to be "success"

If promise is resolved
promise.then(function (result)) {
    //handle success
}
.catch(function (error)) {
    //handle failure
}

```Example of Promise```
let isRainy = new Promise(function(resolve, reject) {
    if(!isRainy) {
        resolve("Great let's go for a picnic!!");
    } else {
        reject("Oh no! It's raining!!");
    }
});
isRainy
    .then(function(message) {
        console.log("Success: ", message);
    })
    .catch(function(error) {
        console.log("Failure: ", error);
    })




