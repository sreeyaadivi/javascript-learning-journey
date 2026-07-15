/*
-----------------------------------------
JavaScript Bootcamp
Module 2: Control Flow
Day 10: Conditional Statements(Else, Else-IF)
-----------------------------------------
*/
// PRACTICE 
/*
let age = 15;
if (age =>18){
    console.log("Adult");
}
else {
    console.log("Minor");
}

let marks = 91;
if (marks >= 90){
    console.log("A Grade");
}
else{
    console.log("Not A grade");
}

let cgpa = 8.2;
if (cgpa >= 9){
    console.log("Scholorship");
}
else if ( cgpa >=8){
    console.log("Good performance");
}
else{
    console.log("Keep Improving");
}
*/

// ASSIGNMENT
/*
Student Grade Checker

Take input:

Student Name
Marks

Display:

90+ → Grade A
75–89 → Grade B
35–74 → Pass
Below 35 → Fail
*/
/*
const readline = require("readline-sync")
let studentName = readline.question("Enter your name: ");
const studentMarks = readline.question("Enter your total marks: ");

if (studentMarks >= 90){
    console.log("Grade A");
}
else if (studentMarks >= 75 ){
    console.log("Grade B");
}
else if (studentMarks >= 35){
    console.log("Pass")
}
else{
    console.log("Fail")
}
*/
/*
 Mini Challenge
Movie Ticket Price Calculator
Take input:
Customer Name
Age
Rules:
Age below 12 → ₹100
Age 12–59 → ₹200
Age 60 and above → ₹150

Display:
Customer : Sreeya
Ticket Price : ₹200
Use if, else if, and else.
*/

const readline = require("readline-sync")
let customenName = readline.question("Enter your Name: ");
let age = readline.question("Enter your Age: ");
console.log(`Customer : ${customenName}`)
if (age <= 12){
    console.log(`Ticket Price : ₹100 `);
}
else if (age <=59){
    console.log(`Ticket Price : ₹200`);
}
else{
    console.log(`Ticket Price : ₹150`)
}