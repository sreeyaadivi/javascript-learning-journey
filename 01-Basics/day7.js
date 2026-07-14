/*
-----------------------------------------
JavaScript Bootcamp
Module 1: JavaScript Fundamentals
Day 7: User Input
-----------------------------------------
*/

// Practice
/*
const readline = require("readline-sync");
let name = readline.question("What is your name?");
console.log(`Hello, ${name}!`);

let language = readline.question("What is your favourite language?");
console.log(`Your favourite language is ${language}.`);

let age = Number(readline.question("what is your age?"));
console.log(`You are ${age} years old.`);

let num1 = Number(readline.question("Enter the first number: "));
let num2 = Number(readline.question("Enter the second number: "));
let sum = num1 + num2;
console.log(`The sum of ${num1} and ${num2} is ${sum}.`);

let city = readline.question("What city do you live in?");
console.log(`City: ${city}.`);

let state = readline.question("What state do you live in?");
console.log(`State: ${state}.`);
*/

// Assignment
// Create student information form
/*
const readline = require("readline-sync");
let studentName = readline.question("Enter your Full Name: ");
let studentAge = Number(readline.question("Enter your Age: "));
let studentBranch = readline.question("Enter your Branch: ");
let studentCgpa = Number(readline.question("Enter your CGPA: "));

console.log(`
    -------STUDENT DETAILS-------
    
    Name : ${studentName}
    Age : ${studentAge}
    Branch : ${studentBranch}
    CGPA : ${studentCgpa}
`)
*/
// Mini Challenge
// Student Grade Calculator

const readline = require("readline-sync");

let nameOfStudent = readline.question("Enter your name: ");
let subject1 = Number(readline.question("Enter marks for Subject 1: "));
let subject2 = Number(readline.question("Enter marks for Subject 2: "));
let subject3 = Number(readline.question("Enter marks for Subject 3: "));
let totalMarks = subject1 + subject2 + subject3;
let averageMarks = totalMarks / 3;

console.log(`
    -------STUDENT GRADE REPORT-------
    Student Name: ${nameOfStudent}
    Total Marks: ${totalMarks}
    Average Marks: ${averageMarks}
    Excellent Performance!
    `);
    
