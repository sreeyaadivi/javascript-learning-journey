/*
Question 4 – Age Checker
Take input for:
Name
Age
If age is 18 or above, print:
Congratulations!
You are eligible for voting.
If not, print nothing.
*/
const readline = require("readline-sync");
let nameOfUser = readline.question("Enter your name: ");
const userAge = Number(readline.question("Enter your age: "));
if (userAge >= 18) {
    console.log(`Congratulations !
        You are eligible for voting.`);
    }
