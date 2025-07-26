// array of books which has title and author as properties, 
// function like getbookfromauthor and that function will accept author
// for loop laga ke return karo vo book jisme author rhega....

//15:13 

let books = [
    {title: "Morning Miracle", author: "Hal Elrod"},
    {title: "Atomic Habits", author: "James Clear"},
    {title: "The Pscychology of Money", author: "Morgan Housel"},
    {title: "Mukund Mala"}
];
console.log("First book title: ", books[0].title);
console.log("First book author: ", books[0].author);

function getBookFromAuthor(author) {
    // not this function should return array of books if same author is found

    // and next create a sep function which will return authos based of book title
    for(let i=0; i<books.length; i++) {
        if(books[i].author === author) {
            return books[i];
        }
    }
}


console.log("Author name is: ", getBookFromAuthor("Hal Elrod"));