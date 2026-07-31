/*
-----------------------------------------
JavaScript Bootcamp
Module 6: Objects
Day 21: Objects
-----------------------------------------
*/

car = {
    brand: "Audi",
    model: "Q",
    price: 26000000
}
console.log(car);

book = {
    title: "Love is God",
    author:"Sudha Murthy",
    pages: 100
}
console.log(book);

movie = {
    name: "Spiderman",
    rating: 9,
    release: 2026
}
console.log(movie);
movie.release = 10
console.log(movie);

laptop = {
    brand:"HP",
    processor: "intel"
}
console.log(laptop);
laptop.color="silver";
console.log(laptop);

employee = {
    name: "Siri",
    role:"AI Developer",
    salary:700000
}
console.log(employee);
delete employee.salary;
console.log(employee);

// Minichallenge
let dreamCar = {
    brand : "Mercedes",
    model : "Benz",
    price : 15000000,
    color : "White",
    fuelType : "Diesel",
    Mileage : 800

};
console.log(dreamCar);
dreamCar.price = 20000000;
dreamCar.owner = "Sreeya";
delete dreamCar.Mileage;
console.log(dreamCar);