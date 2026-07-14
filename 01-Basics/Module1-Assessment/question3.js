/*
====================================================
Module 1 Assessment
Question 3 - Student Marks Calculator

Take input for:

Student Name
Subject 1
Subject 2
Subject 3

Calculate:

Total
Average
Percentage

Print a clean report.
====================================================
*/

const readline = require("readline-sync");
let studentName = readline.question("Enter your name: ");
const subject1 = Number(readline.question("Enter marks for Subject 1: "));
const subject2 = Number(readline.question("Enter marks for Subject 2: "));
const subject3 = Number(readline.question("Enter marks for Subject 3: "));
const total = subject1 + subject2 + subject3;
const average = total / 3;
const percentage = (total / 300) * 100;

console.log(`
    -------------------------
    STUDENT MARKS REPORT
    -------------------------
    Name: ${studentName}
    Subject 1 Marks: ${subject1}
    Subject 2 Marks: ${subject2}
    Subject 3 Marks: ${subject3}
    Total Marks: ${total}
    Average Marks: ${average.toFixed(2)}
    Percentage: ${percentage.toFixed(2)}%
    -------------------------
`);
