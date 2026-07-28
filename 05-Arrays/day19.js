/*
-----------------------------------------
JavaScript Bootcamp
Module 5: Arrays
Day 19: Arrays
-----------------------------------------
*/

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