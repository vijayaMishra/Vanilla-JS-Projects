const xoBoxInGridElements = document.querySelectorAll(".xoBoxInGrid");
xoBoxInGridElements.forEach(function writeXorO(xoBoxInGridElement) {
    xoBoxInGridElement.addEventListener("click", () => {
        const pTagElement = document.createElement("p");
        pTagElement.classList.add("xoWord");
        xoBoxInGridElement.appendChild(pTagElement);
        pTagElement.textContent = 'X';
        console.log(xoBoxInGridElement.textContent);
    });
});
