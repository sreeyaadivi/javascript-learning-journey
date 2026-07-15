/*
-----------------------------------------
JavaScript Bootcamp
Module 2: Control Flow
Day 12: Conditional Statements (Ternary Operator, )
-----------------------------------------
*/

//Assignment
//Voting Eligibility Checker
/*
const readline = require("readline-sync")

let name = readline.question("Enter your name: ");
let age = Number(readline.question("Enter your age: "));

let result = age >=18 ? `Congratulations ${name}! You are eligible to vote ` : `Sorry ${name}. You are not eligible to vote.`;

console.log(result)
*/

/* Mini Project
🎓 Student Result Management System
This project combines everything from Module 2.
Take input:
Student Name
Marks
Rules:
Marks ≥ 90 → Grade A
Marks ≥ 75 → Grade B
Marks ≥ 35 → Pass
Below 35 → Fail
Then use a ternary operator to print:
Eligible for Certificate
if marks are 35 or above.
Otherwise print:
Not Eligible for Certificate
*/

const readline = require("readline-sync");

let studentName = readline.question("Enter your name: ");
const studentMarks = readline.question("Enter your Marks: ");
console.log(`
---------------------
  STUDENT RESULT    
---------------------
Name : ${studentName}
Marks : ${studentMarks}`)

if (studentMarks >= 90){
    console.log(`Grade A`);
}
else if (studentMarks >= 75 ){
    console.log(`Grade B`);
}
else if(studentMarks >=35 ){
    console.log(`Pass`);
}
else{
    console.log(`Fail`)
}

let result = studentMarks >=35 ? "Eligible for Certificate" : "Not Eligible for Certificate";
console.log(`${result}
----------------------------`)


