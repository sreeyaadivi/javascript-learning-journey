/*
-----------------------------------------
JavaScript Bootcamp
Module 8: ES6+
Day 33: Import and Export
-----------------------------------------
*/
// Practice 1 — Nested Object
// Create: // Use optional chaining to print: // Hyderabad
// Then create another student without address and safely try to print the city.
const student = {
    name: "Sreeya",
    address: {
        city: "Hyderabad"
    }
};
console.log(student.address?.city);
const student1 = {
    sname : "Siri"
}
console.log(student1.address?.city);


// Practice 2 — Array + Function
// Create: // Use optional chaining to: // Access the first fruit // Access an index that doesn't exist
// Then create an object with an optional greet() function and safely call it.
const fruits = ["Apple", "Mango", "Banana"];
console.log(fruits?.[0]);
console.log(fruits?.[5]);
const fruit = {
    fname : "sree"
}
console.log(fruit.greet?.());

// Practice 3 — Optional Chaining + ??
// Create AND // Safely retrieve:// name// city// department
// Use "Unknown" as the fallback for missing values.
// Expected:
// Name: Sreeya
// City: Unknown
// Department: Unknown
const employee = {
    name: "Sreeya"
};
console.log(employee?.name ?? "Unknown");
console.log(employee?.city??"Unknown");;
console.log(employee?.department ?? "Unknown");

// 🚀 Mini Challenge
// 🎯 API User Profile Viewer
// Create // Using optional chaining:
// Display:
// Name: Sreeya
// Email: sreeya@example.com
// City: Unknown
// First Skill: JavaScript
// Requirements:
// Use ?. for nested data // Use ?.[] for the array // Use ?? for the missing city
// ⭐ Bonus
// Create another user:
// const user2 = {
//     name: "Rahul"
// };
// Use the same style of code to display his information without causing an error.
const user = {
    name: "Sreeya",
    profile: {
        contact: {
            email: "sreeya@example.com"
        }
    },
    skills: ["JavaScript", "React"]
};

console.log(`
Name: ${user?.name}
Email: ${user?.profile?.contact?.email}
City: ${user?.city ?? "Unknown"}
First skill: ${user?.skills?.[0]}
`)

const user2 = {
    name: "Rahul"
};
console.log(`
Name: ${user2?.name}
Email: ${user2?.profile?.contact?.email}
City: ${user?.city ?? "Unknown"}
First skill: ${user2?.skills?.[0]}
`)
