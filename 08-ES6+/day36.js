/*
-----------------------------------------
JavaScript Bootcamp
Module 8: ES6+
Day 36: ES6+ Integration Review
-----------------------------------------
*/

//🟢 Practice 1 — Student Profile

// Create and Using ES6+:
// Destructure name, age, and course.
// Create updatedSkills using spread and add "JavaScript".
// Create an updatedStudent object using shorthand where possible.
// Print the updated student.

const student = {
    name: "Sreeya",
    age: 21,
    course: "JavaScript",
    skills: ["HTML", "CSS"]
};
 
const {name, age, course,skills} = student;
const updatedSkills = [
    ...skills,
    "Javascript"
];
const updatedStudent = {
    name,
    age,
    course,
    skills : updatedSkills,
}
console.log(updatedStudent)


//🟡 Practice 2 — Product
//Create an arrow function:createProductMessage()
// It should use:
// Object destructuring
// Default parameter
// Template literal
// Expected style: Laptop costs ₹50000 and belongs to Electronics category.

const product = {
    productname: "Laptop",
    price: 50000,
    category: "Electronics"
};
const {productname, price , category } = product;
const createProductMessage =(productName = productname) => {
    return `${productName} costs ${price} and belongs to ${category} category `
};
console.log(createProductMessage());


//Practice 3 — Skills Function

const createSkillProfile = (name, ...skills) => {
    return {
        name, 
        skills
    };
};

console.log(createSkillProfile("Sreeya", "JavaScript", "React", "Git"));


//8. Mini Challenge — Student Profile Generator
//Create a Student Profile Generator using as many ES6+ concepts as possible.
const studentDetails = {
    studentname: "Sreeya",
    studentage: 21,
    studentcourse: "JavaScript",
    studentaddress: {
        city: "Hyderabad"
    },
    studentskills: ["JavaScript", "React"]
};

const { studentname , studentage , studentcourse ,studentskills} = studentDetails;
const city = studentDetails.studentaddress?.city??"Unknown";

const updatedStudentSkills = [
    ...studentskills,
    "Node.js"
];
const createProfile = () => {
    return {
    name,
    age , 
    course, 
    city ,
    skills : updatedStudentSkills, 
    introduce() {
        console.log(`Hi i am ${this.name}.
I am ${this.age} years old.
I am learning ${this.course}.
I live in ${this.city}
My skills are ${this.skills.join(",")}`)
    }
};
};
const profile = createProfile();
profile.introduce();

