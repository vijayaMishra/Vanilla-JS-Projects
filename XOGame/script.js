const xoBoxInGridElements = document.querySelectorAll(".xoBoxInGrid");
let count = 0;
xoBoxInGridElements.forEach(function writeXorO(xoBoxInGridElement) {
    xoBoxInGridElement.addEventListener("click", () => {
        const pTagElement = document.createElement("p");
        pTagElement.classList.add("xoWord");
        xoBoxInGridElement.appendChild(pTagElement);
        count++;
        if(count % 2 !== 0) { 
            pTagElement.textContent = 'X';
            console.log(xoBoxInGridElement.textContent);
            console.log("no. of clicks", count);
        } else {
            pTagElement.textContent = 'O';
        }
        
    });
});
