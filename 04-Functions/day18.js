/*
-----------------------------------------
JavaScript Bootcamp
Module 4: Functions
Day 18: Functions(Advanced )
-----------------------------------------
*/
// Function Expressions
welcome = function(){
    console.log("Welcome to Javascript!");
}
welcome();

square = function(number){
    return number * number;
}
console.log(square(5));

student = function(name, course){
    console.log(`Name : ${name}`);
    console.log(`Course : ${course}`);
}

student("Sreeya", "Javascript");


// Anonymous Functions

const greet = function(){
    console.log("Hello! Welcome to Javascript");
}
greet();

// Callback Functions
function morning(){
    console.log("Good Morning");
}
function wish(callback) {
    callback();
    
}
wish(morning);

function welcome(){
    console.log("Welcome to Javascript");
}
function start(callback){
    callback();
}

start(welcome);


// Call Back functions with parameters

function language(lang){
    console.log(lang);
}
function favourite(callback){
    callback("Javascript");
}

favourite(language);

// function scope

let college = "SCSVMV";
function showCollege(){
    console.log(`College : ${college}`);
}
showCollege();


// Hoisting
 
welCome();
function welCome(){
    console.log("Welcome Back!");
}

// Rest Parameters  

function multiply(...numbers){
    let product = 1;
    for(mul of numbers){
        product *= mul;
    }
    return product;
}
console.log(multiply(2,3,4))

// spread operators

let a = [1,3];
let b = [2,4];

let c = [...a,...b];
console.log(c)

// default parameters

function wellcome(name = "Student"){
    console.log(`Welcome ${name}`);
}
wellcome();
wellcome("Sreeya")
