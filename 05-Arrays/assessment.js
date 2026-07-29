//Create an array of five fruits and print each fruit using a loop
let fruits = ["Apple","Mango","Banana","Orange","Grapes"];
for (fruit of fruits){
    console.log(fruit);
}

// Create an array of numbers.Add two numbers using push().Remove one using pop().Print the final array.

let numbers = [1,2,3,4,5,6];
console.log(numbers);
numbers.push(7);
numbers.push(8);
numbers.pop();
console.log(numbers);

//Create an array of cities.
// Check whether "Hyderabad" exists.
// Print:
// "City Found"
// "City Not Found"

let cities = ["Hyderabad","Delhi","Mumbai","Chennai"];
let i = 0;
let result = 0;
for (let i =0; i< cities.length;i++){
if(cities.includes("Hyderabad")){
     result = "City Found"
    break;
}
else{
     result = "City Not Found"
}
}
console.log(result)

//Create an array: [10,20,30,40,50]
// Print only the even-indexed elements.
// Expected output: 10 30 50

let array = [10,20,30,40,50]
for (let i = 0; i< array.length;i+=2){
    console.log(array[i]);
}


//Create an array of five names.
// Print them in reverse order without using reverse().
// (Hint: Think about loops.)

let names = ["Siri","Dattu","Sath","Sammu","Ammu"];
for (let i = names.length; i >= 0;i--){
    console.log(names[i]);
    break;
}

// Create an array of your favorite movies.
// Requirements:
// Add one movie.
// Remove one movie.
// Check whether one movie exists.
// Join the array using " | ".
// Print the final joined string.

let favoriteMovies = ["Inception", "The Dark Knight", "Interstellar", "The Matrix"];
favoriteMovies.push("Tranformer");
console.log(favoriteMovies)
favoriteMovies.shift();
console.log(favoriteMovies)
for (let i =0; i< favoriteMovies.length;i++){
if(favoriteMovies[i]== "The Dark Knight"){
    result = "Movie Found"
    break;
}
else{
    result = "Movie Not Found"
}
}
console.log(result)
console.log(favoriteMovies.join("|"))
