/*
-----------------------------------------
JavaScript Bootcamp
Module 6: Objects
Day 24: Objects Destructuring
-----------------------------------------
*/

// Object Destructuring
const book = {
    title : "The last Day",
    author : "Sudha",
    price : 149
};
const {title,author,price} = book

console.log(title);
console.log(author);
console.log(price);

// Object Renaming 
let employee = {
    name : "Sathvika",
    department : "CSE"
}
const {name : employeeName, department : dept } = employee;
console.log(employeeName);
console.log(dept);

// Property Shorthand
const brand = "Apple";
const model = "iPhone 16";
const Price = 85000;

const mobile = { brand : brand,
    model : model,
    Price : Price
}
console.log(mobile);

// Object keys

const books = {
    title : "The last Day",
    author : "Sudha",
    pages : 500
};
console.log(Object.keys(books));

// Obeject values
const movie ={
    title : "bahubali",
    rating : 5,
    year : 2016
}
console.log(Object.values(movie));


// for...of loop of accessing key and windows
const student = {
    name : "Sreeya",
    age : 21,
    course : "CSE"
};
for (const [key,value] of Object.entries(student)){
    console.log(`${key} : ${value}`);
}


// spread operator (...)
const studentDetails = {
    name : "Sreeya",
    age : 21
};
const updatedStudent = {
    ...studentDetails,
    city : "Hyderabad"
};
console.log(updatedStudent);

//merge objects
const personal = {
    name : "Sreeya"
};
const education = {
    course : "CSE"
};
const profile = {
    ...personal,
    ...education
}
console.log(profile);

let employeeDetails = {
    name : "Sathvika",
    department : "AI",
    salary : 60000,
    city : "Hyderabad"
};

const {name, ...others} = employeeDetails;
console.log(name);
console.log(others);

// Freezing and sealing

const bookName = {
    title : "Javascript",
    pages : 500
};
Object.freeze(bookName);
bookName.pages = 600;
bookName.price = 200;
console.log(bookName);

const mobilePhone = {
    brand : "Samsung",
    price : 70000
};
Object.seal(mobilePhone);
mobilePhone.price = 80000;
mobilePhone.color = "Blue";
console.log(mobilePhone);


const account = {
    owner : "Sreeya",
    balance : 10000,
    accountType : "Savings"
};
Object.seal(account);
account.balance = 15000;
account.branch = "Hyderabad"
console.log(account)

