const xoBoxInGridElements = document.querySelectorAll(".xoBoxInGrid");
let count = 0;
let board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
let winner = false;
xoBoxInGridElements.forEach((xoBoxInGridElement, index) => {
    xoBoxInGridElement.addEventListener("click", (event) => {

        let position = event.target.id;
        if(position === "") position = event.target.parentElement.id;

        let row = position[0];
        let col = position[1];
        //two words cannot be written in a box
        if(board[row][col] !== null) {
            return;
        }
        if(winner) {
            return;
        }
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
            winner = true;
            const winnerMsgParentElement = document.querySelector(".winnerMsgParent");
            const winnerTextElement = document.createElement("p");
            winnerTextElement.classList.add("winnerText");
            winnerTextElement.textContent = `${currentPlayer} wins!`;
            winnerMsgParentElement.appendChild(winnerTextElement);
        }
    });
});

function checkWinner(board, currentPlayer, row, col) {
    // check row where user entered
    if(board[row][0] === currentPlayer &&
        board[row][1] === currentPlayer &&
        board[row][2] === currentPlayer
    ) {
        let id1 = row.concat('0');
        let id2 = row.concat('1');
        let id3 = row.concat('2');

        // let idToFind = row.concat(col);
        // let idElement = document.getElementById(idToFind);
        // const xoBoxInGridElement = document.getElementById(idToFind);

        const xoBox1InGridElement = document.getElementById(id1);
        const xoBox2InGridElement = document.getElementById(id2);
        const xoBox3InGridElement = document.getElementById(id3);
        //add a new class to the element to make it coloured green
        xoBox1InGridElement.classList.add("greenedBox"); 
        xoBox2InGridElement.classList.add("greenedBox"); 
        xoBox3InGridElement.classList.add("greenedBox"); 
        return true;
    }
    //checking for columns
    if(board[0][col] === currentPlayer &&
        board[1][col] === currentPlayer &&
        board[2][col] === currentPlayer
    ) {
        const xoBox1InGridElement = document.getElementById("0".concat(col));
        const xoBox2InGridElement = document.getElementById("1".concat(col));
        const xoBox3InGridElement = document.getElementById("2".concat(col));
        
        //adding classList to the above caught element
        xoBox1InGridElement.classList.add("greenedBox");
        xoBox2InGridElement.classList.add("greenedBox");
        xoBox3InGridElement.classList.add("greenedBox");
        return true;
    }

    //diagonal
    const leftDiagonal = board[0][0] === currentPlayer && 
                        board[1][1] === currentPlayer && 
                        board[2][2] === currentPlayer;

    const rightDiagonal = board[0][2] === currentPlayer &&
                        board[1][1] === currentPlayer &&
                        board[2][0] === currentPlayer;

    if(leftDiagonal) {
        const xoBox1InGridElement = document.getElementById("00");
        const xoBox2InGridElement = document.getElementById("11");
        const xoBox3InGridElement = document.getElementById("22");
        xoBox1InGridElement.classList.add("greenedBox");
        xoBox2InGridElement.classList.add("greenedBox");
        xoBox3InGridElement.classList.add("greenedBox");
        return true;
    }
    if(rightDiagonal) {
        const xoBox1InGridElement = document.getElementById("02");
        const xoBox2InGridElement = document.getElementById("11");
        const xoBox3InGridElement = document.getElementById("20");

        xoBox1InGridElement.classList.add("greenedBox");
        xoBox2InGridElement.classList.add("greenedBox");
        xoBox3InGridElement.classList.add("greenedBox");
        return true;
    }
}

