/*
-----------------------------------------
JavaScript Bootcamp
Module 5: Arrays
Day 21: Arrays Miniproject
-----------------------------------------
*/

//Mini Project
//Personal Library Manager

let books = [
    "Atomic Habits",
    "Deep Work",
    "Rich Dad Poor Dad"
];
console.log(`My Library`);
for (let i = 0; i< books.length;i++){
    console.log(`${i+1}. ${books[i]}`)
}
books.push("The Alchemist");
console.log(`My Library`);
for (let i = 0; i< books.length;i++){
    console.log(`${i+1}. ${books[i]}`)
}
books.pop();
console.log(`My Library`);
for (let i = 0; i< books.length;i++){
    console.log(`${i+1}. ${books[i]}`)
}
if(books.includes("Deep Work")){
    console.log("Book Available");
}
else{
    console.log("Book Not Found");
}
console.log(books.indexOf("Atomic Habits"));
console.log(books.reverse())
console.log(books.join(", "))

let i = 0;
for (book of books){
    console.log(`the book of index ${i} is ${book}`);
    i++;
}
