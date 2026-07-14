/*
====================================================
Module 1 Assessment
Question 2 - Rectangle Calculator

Question:
Take input for:
- Length
- Breadth

Calculate and print the area and perimeter of the rectangle.
====================================================
*/

const readline = require("readline-sync");
const length = Number(readline.question("Enter the length of the rectangle: "));
const breadth = Number(readline.question("Enter the breadth of the rectangle: "));
const area = length * breadth;
const perimeter = 2 * (length + breadth);
console.log(`The area of the rectangle is: ${area}`);
console.log(`The perimeter of the rectangle is: ${perimeter}`);
