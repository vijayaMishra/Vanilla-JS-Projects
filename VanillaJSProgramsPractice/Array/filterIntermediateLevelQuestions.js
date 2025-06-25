//Filter based on nested property
const users = [
  { name: "Yamuna", location: { city: "Seattle", country: "UK" } },
  { name: "Kalindi", location: { city: "Braj", country: "Bharatvarsh" } },
];

//all users who live in Bharatvarsh
const bharatUsers = users.filter(userDetails => userDetails.location.country === "Bharatvarsh");
console.log("People living in Bharatvarsh: ", bharatUsers[0].name);

//Q. 2
//Filter by matching part of a String
const books = [
  { title: "Bhagavad Gita", author: "Vyasa" },
  { title: "Ramayana", author: "Valmiki" },
  { title: "Gita for Kids", author: "Unknown" },
];
//Return all books where the title contains the word "Gita".
const gitaBooks = books.filter(book => book.title.includes("Gita"));
const bookTitles = gitaBooks.map(book => book.title);
console.log("Book Titles =", bookTitles)
// [
//     { title: "Bhagavad Gita", author: "Vyasa" },
//     {title: "Gita for Kids", author: "Unknown" }
// ] Here, map comes into picture if you want all titles only from this array of objects

// Perform case sensitive matches

// Q. 3
