document.querySelector(".grandparent")
    .addEventListener("click", () => {
        console.log("Grandfather called");
    }, false); //Bubbling

    document.querySelector(".parent")
        .addEventListener("click", (e) => {
            e.stopPropagation();
            console.log("Parent called");
        }, true);
    document.querySelector(".child")
        .addEventListener("click", (e) => {
            console.log("Child called");
            
        }, false);