/*
-----------------------------------------
JavaScript Bootcamp
Module 3: Loops
Day 15: Pattern Printing
-----------------------------------------
*/

// triangle
let n = 5
for (let i = 1; i<= n; i++){
    let line = ""
    for (let j = 1; j <= i;j++){
        line += j;
    }
    console.log(line);
}

// i and j are equal

n = 5
for(let i = 1; i <= n; i++){
    let line = " ";
    for(let j = 1; j <= n; j++){
        line += i + " ";
    }
    console.log(line);
}

let number = 5;
for (let i = number; i >= 1; i--){
    line = ""
    for (let j = 1; j <= i;j ++){
        line += j + " ";
    }
    console.log(line)
}


// Assignment
//Multiplication Grid
//Print the multiplication tables from 1 to 5.

let number = 5;
for (let i = 1; i <=number; i++){
    console.log(`Table of number ${i}`)
    for (let j = 1; j <= 10; j++){
        result = i * j;
        console.log(`${i} x ${j} = ${result}`)
    }
}

// mini project

const readline = require("readline-sync");
number = Number(readline.question("Enter the Number of Students: "));
for ( let i = 1; i <= number; i ++){
    let attendance = "present"
    console.log(`Student ${i} : ${attendance}`);
}
console.log("Attendance Completed!")

// Alphabets
let alphabets = ["A", "B", "C", "D"]
for (let i = 1; i <= 4; i++){
    let line = ""
    for (let j = 1; j <= i; j++){
        line+= alphabets[i-1]+ " ";
    }
    console.log(line )
}

// sqaure
let n = 5;
for (let i = 1; i<=n; i++){
    line = "";
    for (let j = 1; j <= i;j++){
        line+=j + " "
    }
    console.log(line);
}

// Pyramid
let n = 5;
for(let i = 1;i<=n; i++){
    let line= "";
    for(let j = 1;j<=n-i;j++){
        line+= " ";
    }
    for(let j = 1;j <=(2*i-1); j++){
        line+= j;
    }
    console.log(line)
}