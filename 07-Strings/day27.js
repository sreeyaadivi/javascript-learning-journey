/*
-----------------------------------------
JavaScript Bootcamp
Module 7: Strings
Day 27: String Methods
-----------------------------------------
*/

const sentence = "JavaScript is Awesome";
console.log(sentence.indexOf("Script"));
console.log(sentence.startsWith("Java"));
console.log(sentence.endsWith("Awesome"));

const text = "apple apple apple";
console.log(text.replace("apple","orange"));
console.log(text.replaceAll("apple","orange"));

const user = "Sreeya,21,Hyderabad";
console.log(`Original : ${user}`);
console.log(user.split(","));
console.log(user.charAt(0));
const equal = "=";
console.log(equal.repeat(25));
const one = "Welcome";
const two = " Sreeya";
console.log(one.concat(two));