// Create an object called employee with the following properties:
// name: "Rahul"
// age: 28
// department: "IT"
// Print all the properties using dot notation.

const employee = {
    name: "Rahul",
    age: 28,
    department: "IT"
};
console.log(employee.name);
console.log(employee.age);
console.log(employee.department);

// Using the same employee object:
// Update the age to 29.
// Add a new property salary with value 60000.
// Delete the department property.
// Print the final object.

employee.age = 29;
employee.salary = 60000;
delete employee.department;
console.log(employee)



// Create an object laptop and  Print:
// Brand Model RAM and Storage
const laptop = {
    brand: "Dell",
    model: "Inspiron",
    specs: {
        ram: "16GB",
        storage: "512GB SSD"
    }
};
console.log(laptop.brand);
console.log(laptop.model);
console.log(laptop.specs.ram);
console.log(laptop.specs.storage);

// Create an object called car with:
// brand
// model
// year
// Add a method called displayInfo() that prints:
// Brand:
// Model:
// Year:
// Use the this keyword.
// Call the method.
const car = {
    brand : "BMW",
    model : "Q", 
    year : 2025,
    displayInfo : function() {
        console.log(`Brand : ${this.brand}`);
        console.log(`Model : ${this.model}`);
        console.log(`Year : ${this.year}`);
    }
}
car.displayInfo();

// Create an object called student with:
// name and marks
// Add a method called isPassed().
// If marks are 35 or above, print: Passed
// Otherwise print: Failed

const student = {
    name : "Sammu",
    marks : 70,
    isPassed : function (){
        if(student.marks >=35){
            console.log("Passed");
        }
        else{
            console.log("Failed");
        }
    }
};
student.isPassed();

// Create an object named book
// Destructure:
// title
// author
// price
// Print all three.

const book = {
    title: "JavaScript",
    author: "John",
    price: 500
};
 const { title, author, price } = book;
 console.log(title);
 console.log(author);
 console.log(price);

//  Create an object names mobile
// Using destructuring:
// Rename brand to mobileBrand
// Print:
// mobileBrand
// price
// color

const mobile = {
    brand: "Samsung",
    rate: 60000,
    color: "Black"
};

const { brand : mobileBrand,rate,color } = mobile;
console.log(mobileBrand);
console.log(rate);
console.log(color);


// Create an object named Movie
// Print:
// Object.keys(movie)
// Object.values(movie)
// Object.entries(movie)

const movie = {
    title: "Inception",
    year: 2010,
    rating: 9
};
console.log(Object.keys(movie));
console.log(Object.values(movie));
console.log(Object.entries(movie));

//Loop through the movie object using: Object.entries()

for (let [key,value] of Object.entries(movie)){
    console.log(`${key}: ${value}`);
}

// Create object named personal and education and 
// Merge both objects using the spread operator.
// Print the merged object.

const personal = {
    name: "Sreeya"
};
const education = {
    course: "CSE"
};
const merged = {
    ...personal,
    ... education
}
console.log(merged);


// Create:
// Use the rest operator to separate: name
// Print: Name and Others

const employeeDetails = {
    employeeName: "Rahul",
    age: 28,
    city: "Hyderabad"
};
const {employeeName, ...others } = employeeDetails;
console.log(employeeName);
console.log(others);

// Create:
// Freeze the object.
// Try to:
// change balance
// add branch
// Print the object.
const account = {
    owner: "Amit",
    balance: 10000
};
Object.freeze(account);
account.balance = 15000;
account.branch = "NIRD";
console.log(account);

// Create and Seal the object.
// Update level to 2.
// Try to add country.
// Print the object.

const profile = {
    username: "coder123",
    level: 1
};
Object.seal(profile);
profile.level = 2;
profile.country = "India"
console.log(profile)