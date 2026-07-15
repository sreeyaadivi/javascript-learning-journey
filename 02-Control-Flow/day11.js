/*
-----------------------------------------
JavaScript Bootcamp
Module 2: Control Flow
Day 11: Conditional Statements (Nested If, Switch)
-----------------------------------------
*/

//Assignment
// ATM Login system
/*
const readline = require("readline-sync")

const username = readline.question("Enter the Username: ");
const password = Number(readline.question("Enter password: "));

if (username == "admin"){
    if (password == 1234 ){
        console.log("Login Successful")
    }
    else {
    console.log("Incorrect Password")
    }

}
*/

// Minichallenge
// Day Finder

const readline = require("readline-sync")

let day = Number(readline.question("Enter the day: "));
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}