const xoBoxInGridElements = document.querySelectorAll(".xoBoxInGrid");
let count = 0;
xoBoxInGridElements.forEach(function writeXorO(xoBoxInGridElement) {
    xoBoxInGridElement.addEventListener("click", () => { 
        if(xoBoxInGridElement.querySelector("p")) {
            return; // do nothing
        }
        const xoWordElement = document.createElement("p");
        xoWordElement.classList.add("xoWord");
        xoBoxInGridElement.appendChild(xoWordElement);           
        //Alternate X and O based on count
        if(count % 2 !== 0) { 
            xoWordElement.textContent = 'X';
        } else {
            xoWordElement.textContent = 'O';
        } 
        count++;
    });
    
});
