//Ques. 1
//array of objects
const books = [
    {title: "Atomic Habits", author: "James Clear"},
    {title: "The Morning Miracle", author: "Hal Erod"},
    {title: "Launch Your Life to the Next Level", author: "Krishna Dhan Das"},
    {title: "Rich Dad Poor Dad", author: "Robert Kiyosaki"}
]
console.log("Books = ", books);

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

const booksWithCategory = [];
for(let i = 0; i < Object.keys(books).length; i++) {
    booksWithCategory.push({ title: books[i].title, author: books[i].author, theme: "Personal Development"});
    if(booksWithCategory[i].title === "Rich Dad Poor Dad") {
        booksWithCategory[i].theme = "Finance";
        console.log(booksWithCategory[i]);

    }
}

console.log("Books with Theme = ", booksWithCategory);

//Ques. 2
// input [10, -7, 6]
// output [{key: 10}, {key: -7}, {key: 6}]
const arr = [10, -7, 6];
console.log("arr = ", arr);
const arrOfObjects = [];
for(let i = 0; i < arr.length; i++) {
    arrOfObjects.push( {key: arr[i]} );
}
console.log("arrOfObjects", arrOfObjects);