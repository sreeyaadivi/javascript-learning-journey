/*
-----------------------------------------
JavaScript Bootcamp
Module 5: Arrays
Day 19: Arrays
-----------------------------------------
*/

const { InputItems } = require("openai/resources/responses.mjs")

let subjects = ["Math","Science","English"]
console.log(subjects[2])

let games = ['cricket','football','Chess']
games[1]= 'kabaddi'

console.log(games)

let cities = ['Hyderabad','Chennai']
cities.push('Bangalore')
cities.unshift('Delhi')
console.log(cities)


let fruits = ['Apple','Orange','Grapes']
for (let i = 0;i < fruits.length;i++){
    console.log(fruits[i])
}

// for...of loop

let cityes = ['Hyderabad','Chennai','Delhi']
for (let city of cityes){
    console.log(city)
}

// array of mixed datatypes

let person = ["Sreeya",21,true]
console.log(person)

//for a given array with marks of students 
//find the average of the entire class
let Marks = [85,97,44,37,76,60];
let sum = 0;
for (let val of Marks){
    sum += val;
}
console.log(sum)

let avg = sum/Marks.length;
console.log(avg)

//for a given array with prices of 5 items -> [240,645,300,600,502,900]
//all items have an offer of 10% off on them. change the arrray to store final price after tje applying the offer.

let items = [240,645,300,600,502,900]

for (let i =0;i< items.length;i++){
    let offer = items[i]/10;
    items[i] -= offer;

}
console.log(items)