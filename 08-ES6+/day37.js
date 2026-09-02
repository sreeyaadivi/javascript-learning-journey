/*
-----------------------------------------
JavaScript Bootcamp
Module 8: ES6+
Day 37: ES6+ Practical Patterns
-----------------------------------------
*/

//🟢 Practice 1 — Update Student
//Create updatedStudent using spread.age → 22 and course → React

const student = {
    name: "Sreeya",
    age: 21,
    course: "JavaScript",
    city: "Hyderabad"
};
const updatedStudent = {
    ...student,
    age : 22,
    course : "React"
};
console.log(student);
console.log(updatedStudent);

//🟡 Practice 2 — Skills Manager
//Create: updatedSkills  using spread and add:React, Node.js and Git
const skills = ["HTML", "CSS", "JavaScript"];
const updatedSkills = [
    ...skills,
    "React","Node.js","Git"
];
console.log(updatedSkills);

//Practice 3 — Student Display Function


const displayStudent = ({ name, age, course, city = "Unknown" }) => {
    console.log(`
Name : ${name}
Age : ${age}
Course : ${course}
City : ${city}
`);
};

displayStudent({
    name: "Sreeya",
    age: 21,
    course: "JavaScript"
});

//Mini Challenge — Student Data Updater

const studentdetails = {
    name: "Sreeya",
    age: 21,
    course: "JavaScript",
    skills: ["HTML", "CSS", "JavaScript"],
    profile: {
        city: "Hyderabad"
    }
};
const updateStudent=(studentDetails, newSkill, newCourse) =>{
    const updatedStudent ={
        ...studentDetails,
        course : newCourse,
        skills : [...studentDetails.skills,newSkill],
    };
    return updatedStudent;
}

const displaystudent = ({ name,age,course,skills,profile}) => {
    const studentCity = profile?.city??"Unknown";
    console.log(`
Name: ${name}
Age: ${age}
Course: ${course}
City: ${studentCity}
Skills: ${skills.join(", ")}
`);
};
const updatedstudent = updateStudent(
    studentdetails,
    "React",
    "Frontend Development"
);

displaystudent(updatedstudent); 
