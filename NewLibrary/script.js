//Creating a books array
let books = ["The thousand splendid suns", "Beyond Birth and Death", "Science of Self-Realization"];

//iterating over each book in books[] to add it in the ul element
for(let i = 0; i < books.length; i++) {
    //creating new li element on each iteration of for loop
    const bookToBeAddedLiElement = document.createElement("li");
    //adding text content to the li element created above
    bookToBeAddedLiElement.textContent = books[i];
    //accessing ul element having class "ulBooks"
    const ulBooksElement = document.querySelector(".ulBooks");
    //appending li element in the ul element
    ulBooksElement.appendChild(bookToBeAddedLiElement);
}
//accessing button element
const addBookBtnElement = document.querySelector(".addBookBtn");
//on the click of above button , opening modal
addBookBtnElement.addEventListener("click", () => {
    //accessing dialog element
    const dialogElement = document.querySelector(".dialogToAddBookDetails");
    //show dialogBox on the click of button
    dialogElement.showModal();
});

//accessing Add Books button inside Dialog Box
const addBookBtnInsideDialogElement = document.querySelector(".addBookBtnInsideDialog");
//Add event listener on "add btn" button element inside dialog box
addBookBtnInsideDialogElement.addEventListener("click", () => {
    //console log the book name entered by user
    //access bookNameEnteredByUser element
    const bookNameEnteredByUserElement = document.querySelector(".bookNameEnteredByUser");
    //access the text content of the element in which user has given the book name input
    console.log(bookNameEnteredByUserElement.value);
    
    //Dynamically add the book name received as user input in the li element
    if(bookNameEnteredByUserElement.value !== "") {
        const newLiElement = document.createElement("li");
        //add text content to the newly created li element
        newLiElement.textContent = bookNameEnteredByUserElement.value;

        //access the ul element with class "ulBooks"
        const ulBooksElement = document.querySelector(".ulBooks");

        //append newly created li element to the ul element
        ulBooksElement.appendChild(newLiElement);
    }

    //access dialog box
    const dialogElement = document.querySelector(".dialogToAddBookDetails");  
    //Close dialog Box
    dialogElement.close();
    
});    





        