document.querySelector(".grandparent")
    .addEventListener("click", () => {
        console.log("Grandfather called");
    }, false); //Bubbling
    
    document.querySelector(".parent")
        .addEventListener("click", () => {
            console.log("Parent called");
        }, false);
    document.querySelector(".child")
        .addEventListener("click", () => {
            console.log("Child called");
        }, false);