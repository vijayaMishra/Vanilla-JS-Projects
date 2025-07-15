const xoBoxInGridElements = document.querySelectorAll(".xoBoxInGrid");
let count = 0;
let board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
xoBoxInGridElements.forEach((xoBoxInGridElement, index) => {
    xoBoxInGridElement.addEventListener("click", (event) => {
        // if(board[i][j] !== null) {
        //     return; // do nothing
        // }
        let position = event.target.id;
        let row = position[0];
        let col = position[1];

        // console.log(board);
        const xoWordElement = document.createElement("p");
        xoWordElement.classList.add("xoWord");
        xoBoxInGridElement.appendChild(xoWordElement);
        //Alternate X and O based on count

        xoWordElement.textContent = count % 2 ? 'X' : 'O';
        board[row][col] = xoWordElement.textContent;

        count++;
        console.log(board);
    });
    
});
