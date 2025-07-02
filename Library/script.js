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
addBookBtnElement.addEventListener("click", () => {
    detailsOfBookToBeAddedDialogElement.close();
});



