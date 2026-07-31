/*
-----------------------------------------
JavaScript Bootcamp
Module 6: Objects
Day 24: Objects Destructuring, Renaming and Default values, Property shorthand
-----------------------------------------
*/

const book = {
    title : "The last Day",
    author : "Sudha",
    price : 149
};
const {title,author,price} = book

console.log(title);
console.log(author);
console.log(price);

const employee = {
    name : "Sathvika",
    department : "CSE"
}
const {name : employeeName, department : dept } = employee;
console.log(employeeName);
console.log(dept);


const brand = "Apple";
const model = "iPhone 16";
const Price = 85000;

const mobile = { brand : brand,
    model : model,
    Price : Price
}

console.log(mobile);
