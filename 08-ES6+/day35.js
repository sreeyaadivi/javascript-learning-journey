/*
-----------------------------------------
JavaScript Bootcamp
Module 8: ES6+
Day 35: Object Enhancements
-----------------------------------------
*/
//Practice 1 — Property Shorthand
//Create a student object using property shorthand.
const name = "Sreeya";
const age = 21;
const course = "CSE";
const city = "Hyderabad";

const student = {
    name,
    age,
    course,
    city
};
console.log(student);

//Practice 2 — Method Shorthand
//Create a calculator object with:add(),subtract(),multiply()
// Use method shorthand.
// Each method should accept two numbers and return the appropriate result.
// Test all three.

const calculator = {
    add(a,b){
        return a + b;
    },
    subtract(a,b){
        return a - b;
    },
    multiply(a,b){
        return a * b;
    }
}
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));

//Practice 3 — Computed Property Names
//Create an object using computed property names:
// name → "Sreeya"
// city → "Hyderabad"
// course → "CSE"
// Print the final object.
const key1 = "name";
const key2 = "city";
const key3 = "course";
const detail = {
    [key1] : "Sreeya",
    [key2] : "Hyderabad",
    [key3] : "CSE",
}
console.log(detail);

//🚀 Mini Challenge
// 🎯 Dynamic Student Profile
//Create a student object that uses:
// 1️⃣ Property shorthand (name,age,course) 
// 2️⃣ Computed property : [dynamicKey]: city 
// 3️⃣ Method shorthand create : introduce() It should print:
// Hi, I am Sreeya.
// I am 21 years old.
// I study CSE.
// I live in Hyderabad.

const dynamicKey = "city";

const studentDetails = {
    name,
    age,
    course,
    [dynamicKey]: city,

    introduce() {
        console.log(`Hi I am ${this.name}.
I am ${this.age} years old.
I study ${this.course}.
I live in ${this[dynamicKey]}.
`)
    }
};
console.log(studentDetails);
studentDetails.introduce();