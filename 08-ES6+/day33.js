/*
-----------------------------------------
JavaScript Bootcamp
Module 8: ES6+
Day 33: Import and Export
-----------------------------------------
*/
// Practice 1 — Named Export
// Create two files: // math.js// app.js
// In math.js: // Create and export: // add()
// The function should accept two numbers and return their sum.
// Import it into app.js and test: // console.log(add(10, 20));
// Expected: // 30
import {add} from './math.js';
console.log(add(10,20));

//Multiple Exports
import {add as addition,subtract,multiply} from './calculator.js';
console.log(addition(100,20));
console.log(subtract(100,20));
console.log(multiply(100,20));

//default export
import greet from './greeting.js';
console.log(greet("Sreeya"));

// 🚀 Mini Challenge
// 🎯 Student Utility Module
// Create two files: // student.js// app.js
// // student.js// Create:// createStudent()// calculateGrade()
// createStudent() should accept: // name// age// course
// and return:
// {
//     name,
//     age,
//     course
// }
// calculateGrade() should accept marks and return:
// 90+ → A
// 75–89 → B
// 60–74 → C
// 35–59 → D
// Below 35 → F
// Export both functions. // app.js // Import both functions and test them.
// For example:
// console.log(
//     createStudent("Sreeya", 21, "CSE")
// );
// console.log(
//     calculateGrade(92)
// );
// Expected:
// {
//     name: "Sreeya",
//     age: 21,
//     course: "CSE"
// }
// A
import {createStudent,calculateGrade} from './student.js';
console.log(
    createStudent("Sreeya", 21, "CSE")
);
console.log(
    calculateGrade(92)
);
