/*
Create a Simple Employee Salary Slip.
Take input:
Employee Name
Basic Salary
Calculate:
HRA = 20%
DA = 10%
Total Salary
Print EMPLOYEE SALARY SLIP
*/
const readline = require("readline-sync");
let employeeName = readline.question("Enter Employee Name: ");
const salary = Number(readline.question("Enter Employee Salary: "));
const HRA = salary * 0.2;
const DA = salary * 0.1;
const totalSalary = salary + HRA + DA;

console.log(`
    -------------------------
    EMPLOYEE SALARY SLIP
    -------------------------

    Employee Name: ${employeeName}
    Basic Salary: ${salary}
    HRA : ${HRA}
    DA : ${DA}
    Total Salary: ${totalSalary}
    -------------------------
`);

