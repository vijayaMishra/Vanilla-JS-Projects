// array of books which has title and author as properties, 
// function like getbookfromauthor and that function will accept author
// for loop laga ke return karo vo book jisme author rhega....

let books = [
    {title: "Morning Miracle", author: "Hal Elrod"},
    {title: "Atomic Habits", author: "James Clear"},
    {title: "The Pscychology of Money", author: "Morgan Housel"},
    {title: "Transform Your Habits", author: "James Clear"},
    {title: "Mukund Mala", author: "King Kulashekhar Alvar"}
];

function getBookFromAuthor(booksArray, author) {
    // not this function should return array of books if same author is found
    let booksOfSameAuthor = [];
    for(let i = 0; i < booksArray.length; i++) {
        if(booksArray[i].author === author) {
            booksOfSameAuthor.push(booksArray[i].title);
        }
    }
    // console.log("booksOfSameAuthor: ", booksOfSameAuthor);
    return booksOfSameAuthor;
}
console.log("Books from the same author are: ", getBookFromAuthor( books, "James Clear"));
// and next create a sep function which will return author based of book title
function getAuthorFromBookTitle(books, title) {
    let authorOfTitle = [];
    for(let i = 0; i < books.length; i++) {
        if(books[i].title === title) {
            authorOfTitle.push(books[i].author);
        }
    }
    return authorOfTitle;
}
console.log("Author of the book is: ", getAuthorFromBookTitle(books, "Mukund Mala"));