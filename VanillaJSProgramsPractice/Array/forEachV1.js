console.log("hi");
const books = [
    {title: "Atomic Habits", author: "James Clear"},
    {title: "The Morning Miracle", author: "Hal Erod"}
]
// create a function which accepts books array and returns
// an array with title converted to upper case
// Using arrow function
const upperCasedBooks = books.map(book => book.title.toUpperCase());
console.log("upperCasedBooks: ", upperCasedBooks);

const upperCasedArray =
books.map(function changeToUpperCase(book) {
    return book.title.toUpperCase();
});
console.log(upperCasedArray);


let upperCasedBookArray = [];
books.forEach(book => {
    upperCasedBookArray.push(book.title.toUpperCase());
});

// books.forEach(function addBooks(book) {
//     upperCasedBookArray.push(book.title.toUpperCase());
// });
console.log("upperCasedBookArray", upperCasedBookArray);