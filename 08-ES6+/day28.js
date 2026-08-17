/*
-----------------------------------------
JavaScript Bootcamp
Module 8: ES6+
Day 28: Arrow Functions
-----------------------------------------
*/

//convert regular function into an Arrow Function:
const multiply = (a,b) => {
    return a * b;
};
let result = multiply(5,6);
console.log(result);

//Create an arrow function called isAdult.
// It should accept age. If the age is 18 or above, return: true Otherwise: false

const isAdult = (age) =>{
    if(age>=18){
        return true;
    }
    else{
        return false
    }
};
console.log(isAdult(21));
console.log(isAdult(16));

//Minichallenge

//Create an arrow function: calculateGrade
// It should accept marks
// Rules:
// 90 or above → A
// 75–89 → B
// 60–74 → C
// 35–59 → D
// Below 35 → F
// Example:
// console.log(calculateGrade(92));
// console.log(calculateGrade(78));
// console.log(calculateGrade(45));
// console.log(calculateGrade(20));
// Expected:
// A
// B
// D
// F

const calculateGrade = (marks) =>{
    if(marks >= 90){
        return "A";
    }
    else if(marks >=75){
        return "B";
    }
    else if(marks >=60 ){
        return "C";
    }
    else if(marks >= 35){
        return "D";
    }
    else{
        return "Fail";
    }
};
console.log(calculateGrade(92));
console.log(calculateGrade(78));
console.log(calculateGrade(45));
console.log(calculateGrade(20));
