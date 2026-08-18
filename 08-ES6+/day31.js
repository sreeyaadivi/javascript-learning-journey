/*
-----------------------------------------
JavaScript Bootcamp
Module 8: ES6+
Day 31: Array Destructuring
-----------------------------------------
*/
// Practice 1 — Basic Destructuring
// Create: // Use destructuring to extract: fruit1// fruit2 // fruit3
// Print all three.
const fruits = ["Apple", "Mango", "Banana"];
const [first,second,third] = fruits;
console.log(first);
console.log(second);
console.log(third);
// Practice 2 — Skipping + Default
// Create: // Using destructuring:
// Extract name
// Skip age
// Extract course
// Then create another example where a missing value gets a default value.
const studentt = ["Sreeya", 21, "CSE"];
const [name, ,course] = studentt;
console.log(name);
console.log(course);

// Practice 3 — Rest Destructuring
// Create: // Using destructuring: // Store 10 in first
// Store all remaining numbers in remaining
// Expected: // First: 10 // Remaining: [20, 30, 40, 50]
const numbers = [10, 20, 30, 40, 50];
const [one,...remaining]= numbers;
console.log(one);
console.log(remaining);


// 🚀 Mini Challenge
// 🎯 Student Profile Extractor
// Create: // Using array destructuring, extract:// name// age// course// city
// Then use rest to collect the remaining skills.
// Expected structure:

// Name: Sreeya
// Age: 21
// Course: CSE
// City: Hyderabad
// Skills: ["JavaScript", "React"]
// ⭐ Important

// For this challenge, I want you to use:

// [ name, age, course, city, ...skills ]

// This will test both:

// Array Destructuring + Rest

const student = [
    "Sreeya",
    21,
    "CSE",
    "Hyderabad",
    "JavaScript",
    "React"
];
const [studentName,studentAge,studentDept,studentCity,...skills] = student;
console.log(
`
Name : ${studentName}
Age : ${studentAge}
Course : ${studentDept}
City : ${studentCity}
Skills :${skills}
`
);
