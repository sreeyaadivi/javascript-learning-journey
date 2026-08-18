/*
-----------------------------------------
JavaScript Bootcamp
Module 8: ES6+
Day 32: Object Destructuring
-----------------------------------------
*/
// Practice 1 — Rename
// Create: // Destructure and rename:
// name → employeeName
// role → employeeRole
// Print both.

const employee = {
    name: "Rahul",
    role: "Developer",
    city: "Hyderabad"
};
 const { name: employeeName,
    role : employeeRole 
 } = employee;
 console.log(employeeName);
 console.log(employeeRole);

//  Practice 2 — Default + Nested
// Create:// Using destructuring:
// Extract name
// Extract city
// Extract country
// Extract employees with default value 0
// Print all four.
const company = {
    name: "MethodHub",
    location: {
        city: "Hyderabad",
        country: "India"
    }
};
const {name: companyName,
    location: {city , country },
    employees = 0
} = company
console.log(companyName);
console.log(city);
console.log(country);
console.log(employees);

// Practice 3 — Rest // Create:
// Destructure:
// name // and collect everything else into:// details
// Expected concept:
// Name: Laptop
// Details:
// {
//     brand: "Dell",
//     price: 60000,
//     color: "Silver"
// }
const product = {
    name: "Laptop",
    brand: "Dell",
    price: 60000,
    color: "Silver"
};
const {name : producatName,
    ...details 
} = product;
console.log(`Name: ${producatName}`);
console.log(details);


// 🚀 Mini Challenge
// 🎯 Employee Profile Extractor
// Create: // Using object destructuring, extract:// name// age// role// city// country// skills
// Then rename:
// name → employeeName // role → employeeRole
// ⭐ Bonus
// Use object rest to collect everything you didn't extract.
// Try to make use of:
// {
//     name: employeeName,
//     role: employeeRole,
//     ...
// }
// This mini challenge combines:
// Object Destructuring + Rename + Nested Destructuring + Rest
const Employee = {
    name: "Sreeya",
    age: 21,
    role: "AI Developer",
    address: {
        City: "Hyderabad",
        Country: "India"
    },
    skills: ["JavaScript", "React", "Git"]
};
const {name,age,role,address: {City,Country},skills} = Employee
const {name:EmployeeName,role:EmployeeRole,address:EmployeeAddress,...other}=Employee;
console.log(EmployeeName);
console.log(EmployeeRole);
console.log(EmployeeAddress);
console.log(other);