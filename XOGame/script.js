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

        const xoWordElement = document.createElement("p");
        xoWordElement.classList.add("xoWord");
        xoBoxInGridElement.appendChild(xoWordElement);

        //Alternate X and O based on count
        let currentPlayer = xoWordElement.textContent = count % 2 ? 'X' : 'O';
        board[row][col] = currentPlayer;
        count++;

        console.log(board);
        if(checkWinner(board, currentPlayer, row, col) ) {
            console.log(`${currentPlayer} wins!`);

        }
    });
});

function checkWinner(board, currentPlayer, row, col) {
    // check row where user entered
    if(board[row][0] === currentPlayer &&
        board[row][1] === currentPlayer &&
        board[row][2] === currentPlayer
    ) {
        console.log(row);
        let idToFind = row.concat(col);
        // let idElement = document.getElementById(idToFind);
        const xoBoxInGridElement = document.getElementById(idToFind);
        //add a new class to the element to make it coloured green
        xoBoxInGridElement.classList.add("greenedBox"); 
        return true;
    }
    //checking for columns
    if(board[0][col] === currentPlayer &&
        board[1][col] === currentPlayer &&
        board[2][col] === currentPlayer
    ) {
        let idToFind = row.concat(col);
        // all values in row where user entered are same
        const xoBoxInGridElement = document.getElementById(idToFind);
        //adding classList to the above caught element
        xoBoxInGridElement.classList.add("greenedBox")

        return true;
    }

    //diagonal
    const leftDiagonal = board[0][0] === currentPlayer && 
                        board[1][1] === currentPlayer && 
                        board[2][2] === currentPlayer;

    const rightDiagonal = board[0][2] === currentPlayer &&
                        board[1][1] === currentPlayer &&
                        board[2][0] === currentPlayer;

    if(leftDiagonal || rightDiagonal) {
        let idToFind = row.concat(col);
        const xoBoxInGridElement = document.getElementById(idToFind);
        xoBoxInGridElement.classList.add("greenedBox");
        return true;
    }
}

