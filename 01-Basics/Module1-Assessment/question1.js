/*
====================================================
Module 1 Assessment
Question 1 - Student Profile

Question:
Take input for:
- Name
- Age
- City

Print a formatted Student Profile.
====================================================
*/

const readline = require("readline-sync");
let name = readline.question("What is your name? ");
let age = Number(readline.question("What is your age? "));
let city = readline.question("What city do you live in? ");

console.log(` 
    -------------------------
    STUDENT PROFILE
    -------------------------
    Name: ${name} 
    Age: ${age}
    City: ${city}
    -------------------------
`);