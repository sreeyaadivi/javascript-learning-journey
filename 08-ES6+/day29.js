/*
-----------------------------------------
JavaScript Bootcamp
Module 8: ES6+
Day 29: Arrow Functions
-----------------------------------------
*/
// Default Parameter
// Create an arrow function: calculateTotal
// Parameters:price and quantity = 1
// Return: price × quantity
// Test:
// console.log(calculateTotal(500, 3));
// console.log(calculateTotal(1000));
// Expected:
// 1500
// 1000

const calculateTotal= (price,quantity = 1) => price * quantity;
console.log(calculateTotal(500, 3));
console.log(calculateTotal(1000));

// Template Literal
// Create and  Print: Use one template literal.

const name = "Sreeya";
const age = 21;
const city = "Hyderabad";
console.log(`
My name is ${name}
I am ${age} years old
I live in ${city}
`)


// Create an arrow function: createWelcomeMessage
// Parameters:  name = "Guest" course = "JavaScript"
// Return:
// Welcome Sreeya!
// You are learning JavaScript.

// Test it with:
// console.log(createWelcomeMessage("Sreeya", "React"));
// console.log(createWelcomeMessage());

const createWelcomeMessage = (name = "Guest",course = "JavaScript") => {
    return `Welcome ${name}!
You are learning ${course}.`
}
console.log(createWelcomeMessage("Sreeya", "React"));
console.log(createWelcomeMessage());


// 🚀 Mini Challenge
// Student Profile Generator
// Create an arrow function:generateProfile
// Parameters:name = "Student" course = "CSE" college = "SCSVMV"
// Return a formatted profile using a template literal:
// -------------------------
// Student Profile
// -------------------------
// Name: Sreeya
// Course: CSE
// College: SCSVMV
// -------------------------
// Test it with:
// console.log(generateProfile("Sreeya", "CSE", "SCSVMV"));
// console.log(generateProfile());

const generateProfile = (name = "Student",course = "CSE",college = "SCSVMV") => 
`
-------------------------
Student Profile
-------------------------
Name : ${name}
Course : ${course}
College : ${college}
-------------------------
`
console.log(generateProfile("Sreeya", "CSE", "SCSVMV"));
console.log(generateProfile());
