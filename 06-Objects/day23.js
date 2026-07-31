/*
-----------------------------------------
JavaScript Bootcamp
Module 6: Objects
Day 23: Object Methodes
-----------------------------------------
*/

student = {
    name : "Sreeya",
    course : "CSE",
    introduce : function (){
        console.log(`Hi, i am ${this.name}`)
    }
}
student.introduce();

calculator = {
    num1 : 45,
    num2 : 45,
    add : function(){
        console.log(`the sum of two numbers is ${this.num1 + this.num2}`);   
}
}
calculator.add()


const movie ={
    title : "bahubali",
    rating : 5,
    year : 2016,
    showDetails :function(){
        console.log(`Movie : ${this.title}
rating : ${this.rating}
year : ${this.rating}`)
    }
}
movie.showDetails();