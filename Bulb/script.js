//const btn = document.getElementByClassName("btn");

const btn = document.querySelector(".btn");
btn.addEventListener("click", function() {
    let isBulbTurnOn = false;
    if(btn.textContent === "Turn ON") {
        isBulbTurnOn = false;
    } else {
        isBulbTurnOn = true;
    }
    if(isBulbTurnOn) { //bulb is on but we want it off - bg black
        btn.textContent = "Turn ON";
        const circle = document.querySelector(".on-bulb")
        circle.classList.remove('on-bulb');
        circle.classList.add('off-bulb');
        const backgroundColor = document.querySelector(".container");
        backgroundColor.style.backgroundColor = "white";    
        
    } else { //bulb is off but we want to turn it on. - bg white clicked on TURN OFF 
        btn.textContent = "Turn OFF";   
        const circle = document.querySelector(".off-bulb")
        circle.classList.remove('off-bulb');
        circle.classList.add('on-bulb');
        const backgroundColor = document.querySelector(".container");
        backgroundColor.style.backgroundColor = "black";
        btn.style.backgroundColor = "white";
        
    }
});
    
    // if(name.textContent === "Hi, Vijayaaaa!") {
    //     name.textContent = "Hi, Ankitttt";
    //     btn.textContent = "Click me, Ankit";
    // } else {
    //     name.textContent = "Hi, Vijayaaaa!";
    //     btn.textContent = "Click me, Vijaya";
    // } 
