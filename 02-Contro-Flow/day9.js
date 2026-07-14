/*
-----------------------------------------
JavaScript Bootcamp
Module 2: Control Flow
Day 9: Conditional Statements
-----------------------------------------
*/
/*
// PRACTICE 
let age = 25;
if (age >= 18) {
    console.log("Adult");
}

let marks = 92;
if (marks >= 90) {
    console.log("Excellent");
}

let temperature = 39;
if (temperature > 35) {
    console.log("Very Hot");
}

let username = "Sreeya" ;
if (username === "Sreeya") {
    console.log("Welcome!");
}

let salary = 60000;
if (salary >= 50000) {
    console.log("High Salary");
}
*/
// Assignment
// DRIVER LICENSE ELIGIBILITY CHECKER
/*
const readline = require('readline-sync');
let name = readline.question("Enter your name: ");
const ageInput = Number(readline.question("Enter your age: "));
if (ageInput >= 18) {
    console.log(`
        Congratulations ${name}!
        you are eligible for a driver's license!`);
    }
*/

// Mini Challenge
// Scholorship Checker
const readline = require('readline-sync');
let StudentName = readline.question("Enter your name: ");
const cgpa = Number(readline.question("Enter your CGPA: "));
if (cgpa >=9)
{
    console.log(`
        Congratulations ${StudentName}!
        You are eligible for the Merit scholarship`);
}
