/*
🚀 Mini Project (30 Marks)
🎓 Student Scholarship System
Take input:
Student Name, Marks and Attendance Percentage
Step 1
Calculate Grade.
90+ → Grade A
75+ → Grade B
60+ → Grade C
35+ → Pass
Else Fail
Step 2
Scholarship Rules
IF Grade A
↓
IF Attendance >=90
↓
Eligible for Scholarship
Else
Not Eligible
(Use Nested if.)
Step 3
Certificate
Use the ternary operator.
Marks >=35
↓
Eligible for Certificate
Else
Not Eligible
Expected Output
----------------------------------

STUDENT REPORT

----------------------------------

Name : Sreeya

Marks : 92

Attendance : 95

Grade : A

Scholarship : Eligible

Certificate : Eligible

----------------------------------
*/

const readline = require("readline-sync");
studentName = readline.question("Enter your Name: ");
studentMarks = Number(readline.question("Enter your Marks: "));
studentPercentage = Number(readline.question("Enter the Percentage: "));
console.log(`
--------------------------------------
Student Report 
--------------------------------------
Name : ${studentName}
Marks : ${studentMarks}
Attendance : ${studentPercentage}`);

if (studentMarks >= 90){
    console.log(`Grade : A`);
}
else if(studentMarks >=75){
    console.log(`Grade : B`);
}
else if (studentMarks >=60){
    console.log(`Grade : C`);
}
else if (studentMarks >= 35){
    console.log(`Grade : D`);
}
else{
    console.log(`Grade : Fail`);
}

if(studentMarks >= 90){
    if (studentPercentage >= 90){
        console.log(`Eligible for Scholarship`);
    }
}
else{
    console.log(`Not Eligible`);
}

certificate = studentMarks >= 35 ? "Eligible For Certificate" : "Not Eligible for Certificate";
console.log(`Certificate : ${certificate} `);
