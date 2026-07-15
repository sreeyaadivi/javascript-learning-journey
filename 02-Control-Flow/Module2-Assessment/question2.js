/*
Question 2 (15 Marks)
Grade Calculator
Take input:
Student Name and Marks
Rules:
90+ → Grade A
75–89 → Grade B
60–74 → Grade C
35–59 → Pass
Below 35 → Fail
Use:
if,else if and else
*/

const readline = require("readline-sync");
studentName = readline.question("Enter your Name: ");
studentMarks = Number(readline.question("Enter your Marks: "));
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
