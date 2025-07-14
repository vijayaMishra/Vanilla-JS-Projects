const xoBoxInGridElements = document.querySelectorAll(".xoBoxInGrid");
let count = 0;
let board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
xoBoxInGridElements.forEach((xoBoxInGridElement, index) => {
    xoBoxInGridElement.addEventListener("click", () => {
        // if(movesArray[index] !== null) {
        //     return; // do nothing
        // }
        const xoWordElement = document.createElement("p");
        xoWordElement.classList.add("xoWord");
        xoBoxInGridElement.appendChild(xoWordElement);
        //Alternate X and O based on count
        let move = count % 2 ? 'X' : 'O';
        xoWordElement.textContent = move;

        count++;
        console.log(board);
    });
    
});
