//Creating a new li element
const newListItem = document.createElement("li");
//adding text content to the li element created above
newListItem.textContent = "5 Languages of Love";

//accessing ul element having class "ulBooks"
const ulBooksElement = document.querySelector(".ulBooks");

//appending the new li element to the ul element
ulBooksElement.appendChild(newListItem);