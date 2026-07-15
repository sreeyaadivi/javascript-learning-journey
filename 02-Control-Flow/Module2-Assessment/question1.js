/*
📝 Question 1 (10 Marks)
Voting Eligibility Checker
Take input:
Name and Age
Display:
------------------------
VOTER DETAILS
------------------------
Name : Sreeya
Age : 21
Status : Eligible to Vote
------------------------
Use the ternary operator.
*/

const readline = require("readline-sync");

voterName = readline.question("Enter your Name: ");
voterAge = Number(readline.question("Enter your Age: "));

result = voterAge >= 18 ? "Eligible to Vote" : "Eligible to Vote";

console.log(`
-----------------------
VOTER DETAILS
-----------------------
Name : ${voterName}
Age : ${voterAge}
Status : ${result}
-----------------------`)