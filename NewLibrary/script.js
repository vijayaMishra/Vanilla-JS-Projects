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
const addBooksBtnElement = document.querySelector(".addBookBtn");
//on the click of above button , opening modal
addBooksBtnElement.addEventListener("click", () => {
    //accessing dialog element
    const dialogElement = document.querySelector(".dialogToAddBookDetails");
    //show dialofBox on the click of button
    dialogElement.showModal();
});