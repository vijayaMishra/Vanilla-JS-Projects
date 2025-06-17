// 6. Create an object student with name, rollNo, and marks (which is an object of subjects)

let student = {
    name: "Hari",
    rollNo: 33,
    marks: {
        english: 94,
        hindi: 98,
        maths: 96,
        computer: 100,
        bg: 100
    }
}

// 7. Access the maths marks from the marks object inside student.
console.log(student.marks.maths);

// 8. Add a new subject science to student.marks.
student.marks.science = 97;
console.log(student.marks);

// 9. Create an array of objects, each representing a book with title, author, and year.
let books = [
    {title: "Atomic Habits", author: "James Clear", year: 1991},
    {title: "Rich Dad, Poor Dad", author: "Robert Kiyosaki", year: 2005},
    {title: "Morning Miracle", author: "Hal Elrod", year: 2012}
];
//console.log(books[0].title);
// 10. Print the titles of all books published after the year 2010.
for(let key in books) {
    if(books[key].year > 2010) {
        console.log(books[key].title);
    }
}
for(let i=0; i<books.length; i++) {
    if(books[i].year > 2010) {
        console.log(books[i].title);
    }
}
