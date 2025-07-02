const books = [
    {title: "Atomic Habits", author: "James Clear" }, 
    {title: "Morning Miracle", author: "Hal Elrod" },
    {title: "Mukund Mala", author: "King Kulshekhara"}
];
const ulMyListElement = document.querySelector(".myList");

books.forEach(book => {
    let liElement = document.createElement("li");
    liElement.textContent = book.title; 
    ulMyListElement.appendChild(liElement);
});

const detailsOfBookToBeAddedDialogElement = 
        document.querySelector(
            ".detailsOfBookToBeAddedDialog");
const openAddBookDialogBtnElement = 
    document.querySelector(".openAddBookDialogBtn");
openAddBookDialogBtnElement.addEventListener(
    "click", () => {
    
    detailsOfBookToBeAddedDialogElement.showModal();
});

const addBookBtnElement = 
    document.querySelector(".addBookBtn");
addBookBtnElement.addEventListener("click", (event) => {
    //console.log(event);
    // Get name of the Book user has typed in "Book Title field in Dialog box."
    const userEnteredBookTitle = document.querySelector(".bookTitle").value;
    const userEnteredBookAuthor = document.querySelector(".bookAuthor").value;
    books.push({title: userEnteredBookTitle, author: userEnteredBookAuthor });
    // console.log("userEnteredBookTitle: ",userEnteredBookTitle);
    // console.log("userEnteredBookAuthor: ", userEnteredBookAuthor);
    // console.log("Books array: ", books);
    let userAddedBooks = [];
    userAddedBooks.push({
        title: userEnteredBookTitle, 
        author: userEnteredBookAuthor
    });
        
    userAddedBooks.forEach(function() {
        let liElement = document.createElement("li");
        liElement.textContent = userEnteredBookTitle;
        ulMyListElement.appendChild(liElement);
    });
    detailsOfBookToBeAddedDialogElement.close();
});



