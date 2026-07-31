/*
-----------------------------------------
JavaScript Bootcamp
Module 6: Objects
Day 22: Objects
-----------------------------------------
*/

//Nested objects

person = {
    name : "Sreeya",
    age : 21,
    city : "Hyderabad"
}
console.log(person.name);
console.log(person.age);
console.log(person.city);

phone = {
    brand : "Samsung",
    model : "S25",
    price : 100000
}

console.log(phone["brand"]);
console.log(phone["model"]);
console.log(phone["price"]);

college = {
    name : "Sreeya",
    location : "Hyderabad",
    principal : {
        name : "Ravi",
        experience : 6
    }
}
console.log(college.principal.experience);


// mini challenge

employee = {
    name : "Sammu",
    role : "AI developer",
    company : {
        name : "ASLS",
        location : "Hyderabad",
        experience : "Fresher"
    }
}
console.log(employee.name);
console.log(employee.company.name);
console.log(employee.company.location);
console.log(employee.company.experience);