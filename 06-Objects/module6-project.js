// 🎯 Project Objective
// Build a Student Management System that stores student information and performs operations like:
// Display student details
// Update marks
// Add new properties
// Delete properties
// Use object methods
// Destructure objects
// Use Object.keys(), Object.values(), Object.entries()
// Copy objects using the spread operator

const student = {
    name: "Sreeya",
    age: 21,
    course: "CSE",
    marks: {
        math: 95,
        science: 90,
        english: 88
    }
};
console.log(`Student Name ${student.name}`);
console.log(`Age ${student.age}`);
console.log(`Course ${student.course}`);
console.log(`Math Marks ${student.marks.math}`);
console.log(`Math Marks ${student.marks.science}`);
console.log(`Math Marks ${student.marks.english}`);

student.age = 22
student.marks.science = 96
console.log(student);

student.city = "Hyderabad";
console.log(student);

delete student.course;
console.log(student);

student.showDetails = function(){
    console.log(`Student: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`City: ${this.city}`);
}
student.showDetails();

const {name,age,city} = student;
console.log(name);
 console.log(age);
 console.log(city);

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

const updatedStudent = {
    ...student,
    college : "SCSVMV"
}
console.log(updatedStudent);

const {name:studentName, ...others} = student;
console.log(studentName);
console.log(others);