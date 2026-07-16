/*
-----------------------------------------
JavaScript Bootcamp
Module 3: Loops
Day 14: Do- while and Nested for 
-----------------------------------------
*/

// Assignment
const readline = require("readline-sync");
let number = readline.question("Enter the number of rows: ");
for (let i = 1; i<= number; i++){
    let line = " "
    for(let j = 1; j<=i;j++ ){
        line+= j; 
    }
    console.log(line);
}

// Mini challenge
// REverse countdown
let num = readline.question("Enter the number: ");
do{
    console.log(num);
    num --;
}while (num >=1);