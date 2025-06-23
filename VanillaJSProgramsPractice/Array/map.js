//array of objects
const books = [
    {title: "Atomic Habits", author: "James Clear"},
    {title: "The Morning Miracle", author: "Hal Erod"},
    {title: "Launch Your Life to the Next Level", author: "Krishna Dhan Das"},
    {title: "Rich Dad Poor Dad", author: "Robert Kiyosaki"}
]
console.log(books);

// expected O/P...  booksWithTheme = [
//     {title: "Atomic Habits", author: "James Clear", theme: "Self-Help"},
//     {title: "The Morning Miracle", author: "Hal Erod", theme: "Self-Help"},
//     {title: "Launch Your Life to the Next Level", author: "Krishna Dhan Das", theme: "Self-Help"},
//     {title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", theme: "Finance"}
// ]

//console.log(books[0]);

//Both books and booksWithThemeSame are pointing to same Object
// const booksWithThemeSameObj = books;
// console.log(booksWithThemeSameObj);

const booksWithTheme = [];
booksWithTheme.push(...books);
console.log(booksWithTheme);

const numberOfBooks = booksWithTheme.length;
for(let i = 0; i < numberOfBooks; i++) {
    booksWithTheme[i].theme = "Self_Help"
    if(booksWithTheme[i].title === "Rich Dad Poor Dad") {
        booksWithTheme[i].theme = "Finance";
    }
}
// PROBLEM WITH THIS APPROACH IS ORIGINAL BOOKS ARRAY IS ALSO GETTING MODIFIED.
console.log(booksWithTheme);
