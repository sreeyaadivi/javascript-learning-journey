/*
-----------------------------------------
JavaScript Bootcamp
Module 3: Loops
Day 13: For and While loops
-----------------------------------------
*/

//Assignment
/*
Multiplication Table
Take input:
Enter a Number:
Example:5
Output:
5 × 1 = 5
5 × 2 = 10
...
5 × 10 = 50
*/
/*
const readline = require("readline-sync");
let number = Number(readline.question("Enter a Number: "));
let i = 1;
for (i =1; i <= 10; i++){
    result = number * i;
    console.log(`${number} x ${i} = ${result}`);
}
*/

//Mini challenge

const readline = require("readline-sync");
let number = Number(readline.question("Enter a Number: "));
let i = number;
while ( i >=1 ){
    console.log(i);
    i--;
}