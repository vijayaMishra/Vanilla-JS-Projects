//Creating a books array
function appendBooksFromArray() {
    let books = ["The thousand splendid suns", "Beyond Birth and Death", "Science of Self-Realization"];

//iterating over each book in books[] to add it in the booksContainer element
    for (let i = 0; i < books.length; i++) {
        //creating new li element on each iteration of for loop
        const bookToBeAddedLiElement = document.createElement("li");
        //adding text content to the li element created above
        bookToBeAddedLiElement.textContent = books[i];
        //accessing booksContainer element having class "booksContainer"
        const booksContainerElement = document.querySelector(".booksContainer");
        //appending li element in the booksContainer element
        booksContainerElement.appendChild(bookToBeAddedLiElement);
    }
}

function attachAddBookClickListener() {
    //accessing button element
    const addBookBtnElement = document.querySelector(".addBookBtn");
    //on the click of above button , opening modal
    addBookBtnElement.addEventListener("click", () => {
        //accessing dialog element
        const dialogElement = document.querySelector(".dialogToAddBookDetails");

        //show dialogBox on the click of button
        dialogElement.showModal();
    });
}

function saveBookInDialogBox() {
    //accessing Add Books button inside Dialog Box
    const addBookBtnInsideDialogElement = document.querySelector(".addBookBtnInsideDialog");
    //Add event listener on "add btn" button element inside dialog box
    addBookBtnInsideDialogElement.addEventListener("click", () => {
        //console log the book name entered by user
        //access bookNameEnteredByUser element
        const bookNameEnteredByUserElement = document.querySelector(".bookNameEnteredByUser");
        //access the text content of the element in which the user has given a book name input
        console.log("user entered book name", bookNameEnteredByUserElement.value);

        //Dynamically add the book name received as user input in the li element
        if (bookNameEnteredByUserElement.value !== "") {
            const  bookImgNameDelbtnDivElement = document.createElement("div");
            bookImgNameDelbtnDivElement.classList.add("bookImgNameDelbtnDiv");

            const imageTag = document.createElement("img");
            imageTag.classList.add("image");
            imageTag.src = "./Images/newbookcoverpage.jpg";

            const pTag = document.createElement("p");
            pTag.classList.add("bookName");
            pTag.textContent = bookNameEnteredByUserElement.value;

            //creating a new button element using JS
            const delBtnElement = document.createElement("button");
            //text written on the delete button
            delBtnElement.classList.add("delBtnBook");
            delBtnElement.textContent = "Delete";

            bookImgNameDelbtnDivElement.appendChild(imageTag);
            bookImgNameDelbtnDivElement.appendChild(pTag);
            bookImgNameDelbtnDivElement.appendChild(delBtnElement);

            const twoBooksGridElement = document.createElement("div");
            twoBooksGridElement.classList.add("twoBooksGrid");
            twoBooksGridElement.appendChild(bookImgNameDelbtnDivElement);

            const booksContainerElement = document.querySelector(".booksContainer");
            //to parent container appending the book div to be added g
            booksContainerElement.appendChild(twoBooksGridElement);
            deleteBtnBookFromLibrary();
        }
        //access dialog box
        const dialogElement = document.querySelector(".dialogToAddBookDetails");
        //Close dialog Box
        dialogElement.close();

        //Clear the user entered book in the input field as the book is added in the list
        bookNameEnteredByUserElement.value = "";
    });
}

function deleteBtnBookFromLibrary() {
    //select the "delete" button element using its class with querySelector
    const delBtnBookElements = document.querySelectorAll(".delBtnBook");
    console.log("delBtnBookElements: ", delBtnBookElements);
    delBtnBookElements.forEach(function attachClickListenerToDeleteBtn(delBtnBookElement) {
        delBtnBookElement.addEventListener("click", (event) => {
            // e.target gives the element where THE ACTUAL event happens.
            console.log("event.target: ", event.target);
            console.log("event.target.parentElement: ", event.target.parentElement);

            //Step 1. Get the Book div
            const bookDiv = event.target.parentElement;
            //Step 2: Get the grid (row) it belongs to
            const gridDiv = bookDiv.parentElement;
            console.log("gridDiv.children:", gridDiv.children.length);
            console.log("bookDiv.children:", bookDiv.children.length);
            //Step 3: Remove the book from its row
            gridDiv.removeChild(bookDiv);
            console.log("gridDiv.children:", gridDiv.children.length);
            console.log("bookDiv.children:", bookDiv.children.length);
            //Step 4: If the row becomes empty, remove it too
            if(gridDiv.children.length === 0) {
                gridDiv.remove();
            }
            //You don't want to hardcode any row, (document.querySelector(".twoBooksGrid") ) gets only the first row.
            //select books Container element
            //const twoBooksGridElement = document.querySelector(".twoBooksGrid");
            //remove actual book from booksContainer parent element
            //twoBooksGridElement.removeChild(event.target.parentElement);
        });
    });
}

saveBookInDialogBox();
attachAddBookClickListener();
deleteBtnBookFromLibrary()


        