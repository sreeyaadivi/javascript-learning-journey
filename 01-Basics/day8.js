/*
🌍 Real-Life Scenario

Imagine your college asks you to create a small application.

The user enters student details.

The program calculates:

Total
Average
Percentage

Then displays a beautiful report.
*/
//STUDENT MANAGEMENT CONSOLE APPLICATION
/*
📝 Requirements

Take input for: Student Name, Branch, Subject1, Subject2, Subject3
Calculate
Total,Average,Percentage
Display the report in a beautiful format.
*/

const readline = require("readline-sync");

let today = new Date();
let studentName = readline.question("Enter your name: ");
let studentBranch = readline.question("Enter your branch: ");
let subject1 = Number(readline.question("Enter marks for Subject 1: "));
let subject2 = Number(readline.question("Enter marks for Subject 2: "));
let subject3 = Number(readline.question("Enter marks for Subject 3: "));

let totalMarks = subject1 + subject2 + subject3;
let averageMarks = totalMarks / 3;
let percentage = (totalMarks / 300) * 100;

console.log(`
    ==============================
    STUDENT REPORT CARD
    ==============================
    Date : ${today}
    Student Name : ${studentName}
    Branch : ${studentBranch}
    Subject 1 Marks : ${subject1}

    Subject 2 Marks : ${subject2}
    
    Subject 3 Marks : ${subject3}

    ------------------------------

    Total Marks : ${totalMarks}
    
    Average Marks : ${averageMarks.toFixed(2)}
    
    Percentage : ${percentage.toFixed(2)}%

    -------------------------------

    Excellent Performance!

    ===============================
`)

