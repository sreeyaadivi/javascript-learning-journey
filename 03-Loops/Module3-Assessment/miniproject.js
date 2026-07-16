/**Student Marks Analyzer
Take input:
Student Name
Number of Subjects
Example:
Enter Student Name: Sreeya
Enter Number of Subjects: 4
Now use a for loop to take marks for each subject.
Example:
Enter marks for Subject 1: 90
Enter marks for Subject 2: 85
Enter marks for Subject 3: 78
Enter marks for Subject 4: 92
After taking all marks, calculate:
Total Marks
Average Marks */

const readline = require("readline-sync");
studentName = readline.question("Enter the Student Name: ");
subjects = Number(readline.question("Enter Number of Subjects: "));
total = 0
for(let i = 1; i <= subjects; i++){
    const marks = Number(readline.question(`Enter the marks of the subject ${i} : `));
    total += marks;
}

console.log(`
---------------------------
STUDENT MARKS REPORT
---------------------------
Student Name = ${studentName}
Subjects = ${subjects}
Total =  ${total}
Average = ${total/subjects}
-----------------------------
`)