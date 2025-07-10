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
        console.log(bookNameEnteredByUserElement.value);

        //Dynamically add the book name received as user input in the li element
        if (bookNameEnteredByUserElement.value !== "") {
            const newDivElement = document.createElement("div");

            //creating p tag to append the string in div element
            const pElement = document.createElement("p");
            //add text content to the newly created p tag element
            pElement.textContent = bookNameEnteredByUserElement.value;

            //creating a new button element using JS
            const delBtnElement = document.createElement("button");
            //text written on the delete button
            delBtnElement.textContent = "Delete";

            //append p element and del button element to the div element
            newDivElement.appendChild(pElement);
            newDivElement.appendChild(delBtnElement);

            //adding class bookAndDelDiv to the div element
            newDivElement.classList.add("bookAndDelDiv");

            //access the booksContainer element with class "booksContainer"
            const booksContainerElement = document.querySelector(".booksContainer");

            //append newly created div element to the booksContainer element
            booksContainerElement.appendChild(newDivElement);
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
    delBtnBookElements.forEach(function attachClickListenerToDeleteBtn(delBtnBookElement) {
        delBtnBookElement.addEventListener("click", (event) => {
            // e.target gives the element where THE ACTUAL event happens.
            //select books Container element
            const twoBooksGridElement = document.querySelector(".twoBooksGrid");
            //remove actual book from booksContainer parent element
            twoBooksGridElement.removeChild(event.target.parentElement);
        });
    });
}
saveBookInDialogBox();
attachAddBookClickListener();
deleteBtnBookFromLibrary()


        