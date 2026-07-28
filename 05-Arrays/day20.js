/*
-----------------------------------------
JavaScript Bootcamp
Module 5: Arrays
Day 20: Arrays[Advanced]
-----------------------------------------
*/

//concat
let a = ["Java","Python"]
let b = ["Javascript","C++"]

let c = a.concat(b)
console.log(c)

//slice

let colors = ["Red","Blue","Green","Yellow"]
newColors = colors.slice(1,3)
console.log(newColors)

//splice

let fruits = ["Apple","Banana","Mango"]
fruits.splice(1,1,"Orange")
console.log(fruits)


// indexOf
let subjects = ["Math", "Science", "English"];
let sub = subjects.indexOf("English");
console.log("Index of English:", sub);


//includes
let animals = ["Dog","Cat","Tiger"];
console.log(animals.includes("Cat"));

//reverse
let letters = ["A","B","C","D"];
console.log(letters.reverse());

//join
let fruit =["apple","banana","mango"];
console.log(fruit.join(", "))



//Create an array to store companies 
//remove the first company from the array
//remove the company on index 2 and replace it with another 
// add the new company at the end

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
companies.splice(1,1,"Ola")
companies.push("Amazon")
console.log(companies)