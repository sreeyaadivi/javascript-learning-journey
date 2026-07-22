/*
-----------------------------------------
JavaScript Bootcamp
Module 4: Functions
Day 17: Functions basics
-----------------------------------------
*/
/*
function introduction(){
    console.log("Hello! My name is Sreeya");
    console.log("I am learning Javascript");
    console.log("I will become a Full Stack Developer");
} 
introduction();
introduction();
*/

//Practice 
/*
function hello(){
    console.log("Hello World");
}
hello();

function favouriteLanguage(){
    console.log("My favourite programming language is JavaScript");
}
favouriteLanguage();

function motivation(){
    console.log(`Practice every day.
        Never give up.
        Success takes consistency`);
}
motivation();
motivation();

*/

// FUnction with Parameters and Arguments
/*
function city(cityName){
    console.log(`City : ${cityName}`);
}
city("Hyderabad");
city("Chennai")

function add(a,b){
    let sum = a+b;
    console.log(`Sum : ${sum}`);
}
add(10,20);

function employee(name,company){
    console.log(`Employee : ${name}`);
    console.log(`Company : ${company}`);
}
employee("Sreeya","OpenAI");
*/

// functions with return values
/*
function square(num){
    return num * num;
}
let result = square(5);
console.log(result);

function multiply(a,b){
    return a * b;
}
let answer = multiply(6,7);
console.log(answer);

function fullName(firstName, lastName){
    return firstName + " " + lastName;
}
let name = fullName("Sreeya", "Adivi");
console.log(name);
*/

// Function with default parameters
/*
function country(name = "India"){
    console.log(`Country : ${name}`);
}
country();
country("Japan");

function power(base, exponent = 2){
    return base ** exponent;
}
console.log(power(5));
console.log(power(2,3));

function introduce(name, role = "Student"){
    console.log(`Name : ${name}`);      
    console.log(`Role : ${role}`);
}
introduce("Sreeya");
introduce("Rahul", "Developer");
*/

// Arrow Functions

const cube = (num) => {
    return num * num * num;
}
console.log(cube(3));

const multiply = (a,b) => {
    return a * b;
}
console.log(multiply(8,5));

const motivation = () => {
    console.log("Keep Learning!");
}
motivation();