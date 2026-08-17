/*
-----------------------------------------
JavaScript Bootcamp
Module 8: ES6+
Day 30: Rest and spread Operators
-----------------------------------------
*/

// Spread Arrays
// Create an array and 
// Create a new array called updatedFruits that:
// Copies all existing fruits
// Adds "Orange"
// Does not modify the original array
// Expected:
// ["Apple", "Mango", "Banana", "Orange

const fruits = ["Apple", "Mango", "Banana"];
const updatedFruits = [...fruits, "Orange"];
console.log(updatedFruits);

// Merge Arrays
// Create and Merge them using the spread operator.
// Expected: // ["HTML", "CSS", "JavaScript", "Node.js", "Python"]
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Python"];
const complete = [...frontend,...backend];
console.log(complete);

// Rest Parameter
// Create an arrow function:// calculateSum
// It should accept any number of numbers and return their total.
// // Test:
// console.log(calculateSum(10, 20));
// console.log(calculateSum(10, 20, 30, 40));
// console.log(calculateSum(5, 5, 5, 5, 5));

const calculateSum = (...numbers) => {
    let sum = 0;
    for (let number of numbers){
        sum += number;
    }
    return sum;
}
console.log(calculateSum(10, 20));
console.log(calculateSum(10, 20, 30, 40));
console.log(calculateSum(5, 5, 5, 5, 5));


// 🚀 Mini Challenge
// 🎯 Student Skills Manager
// Create:
// const createStudent = (name, ...skills) => {
//     // your code
// };
// The function should return an object:
// {
//     name: "Sreeya",
//     skills: ["JavaScript", "React", "Git"]
// }
// Test:
// console.log(
//     createStudent(
//         "Sreeya",
//         "JavaScript",
//         "React",
//         "Git"
//     )
// );
// ⭐ Bonus requirement
// Create a second student by spreading an existing skills array:
// const skills = ["JavaScript", "React", "Git"];
// Use spread when passing the skills to the function.

 const createStudent = (name, ...skills) => {
    return {
        name: name,
        skills : skills
    }
 };
console.log(
    createStudent(
        "Sreeya",
        "JavaScript",
        "React",
        "Git"
    )
);
const skills = ["JavaScript", "React", "Git"];
const secondStudent = createStudent("Rahul",...skills);
console.log(secondStudent)
