/*
-----------------------------------------
JavaScript Bootcamp
Module 3: Loops
Day 15: Pattern Printing
-----------------------------------------
*/

// Assignment

const number = 4;
for (let i = 1; i <= number; i++){
    let line = " "
    for (let j = 1;j<=number; j++){
        line+= i + " ";
    }
    console.log(line)
}


const alphabets = ["A", "B", "C","D"]
for (let i = 1; i <= 4; i++){
    let line = " "
    for (let j = 1;j<=4; j++){
        line+= alphabets[j-1] + " ";
    }
    console.log(line)
}


const numbers = 5
for (let i = 1;i <=number+1; i++){
    let line = "";
    for(j = 1; j <=i; j++){
        line+= 5 + " ";
    }
    console.log(line)
}


// Hollow square

let n = 3;
for (let i = 1; i <= n; i++){
    let line = " "
    for ( let j = 1; j<= n; j++){
        if(i == 1 || i == n|| j == 1 || j == n){
            line += "*" ;
        }
        else{
            line+= " ";
        }
    }
    console.log(line)
}

//Hollow rectangle
let rows = 4;
let cols = 6;
for ( let i = 1; i <= rows;i++){
    let line = "";
    for(let j = 1; j<= cols; j++){
        if( i == 1|| i == rows || j == 1 || j == cols){
            line+= "*";
        }
        else{
            line += " "
        }
    }
    console.log(line)
}

// Hollow Pyramid

let n = 5;
for (let i = 1; i <=n; i++){
    let line = "";
    for(let j = 1; j <= n-i;j++) {
        line+=" ";
    }
    for(let j = 1; j <= (2 *i)-1; j++){
        if(j == 1|| j == (2 *i)-1|| i == n){
            line+= "*";
        }
        else{
            line+= " "
        }
    }
    console.log(line)
}

//Butterfly pattern

let n = 5;
for( let i = 1;i <=n;i++){
    let line = "";
    for (let j = 1;j<=i;j++){
        line += "*";
    }
    for(let j =1; j<= (2*(n-i));j++){
        line+=" ";
    }
    for(let j = 1;j<=i;j++){
        line+="*";
    }
    console.log(line)
}
for (let i =n-1;i >=1;i--){
    let line ="";
    for(let j = 1; j<=i;j++){
        line+="*";
    }
    for(let j = 1; j <= (2*(n-i));j++){
        line+=" ";
    }   
    for(let j = 1; j<=i;j++){
        line+="*";  
    }
    console.log(line)

}

//Half diamond

let n = 5;
for(let  i = 1; i <= n; i++){
    let line = " ";
    for (let j = 1;j<=i;j++){
        line+="*"+" " ;
    }
    console.log(line)
}
for(let i = n-1;i>=1;i--){
    let line = " ";
    for (let j = 1;j<=i;j++){
        line+="*"+" ";
    }
    console.log(line)
}

//Full diamond
let n = 5;
for(let i = 1; i<=n; i++){
    let line = "";
    for(let j = 1;j<=n-i;j++){
        line+=" ";
    }
    for(let j = 1;j<=2*i-1;j++){
        line+="*";
    }
    console.log(line)
}
for(let i = n-1;i>=1;i--){
    let line = "";
    for(let j = 1;j<=n-i;j++){
        line+=" ";
    }
    for(let j =1;j<=2*i-1;j++){
        line+="*";
    }
    console.log(line)
}

//Pascals Triangle

let n = 5;
for(let i = 0;i<n;i++){
    let line = "";
    for(let j = 0; j<=n-i-1;j++){
        line+=" ";
    }
    let num =1;
    for(let j = 0;j<=i;j++){
        line+= num +" ";
        num = num *(i-j)/(j+1);
    }
    console.log(line)
}
   

// Floyd's triangle

let n = 5;
let num =1;
for(let i = 1;i<=n;i++){
    let line ="";
    for(let j= 1;j<=i;j++ ){
        line+=num+" ";
        num++;
    }
    console.log(line)
}
// Assignment
let n = 5;
for(let i = 1;i<=n;i++){
    let line = "";
    for(let j = 1;j<=i;j++){
        line+= j;
    }
    console.log(line)
}

let alphabets = ["A", "B", "C", "D", "E"];
for(let i = 1;i<=alphabets.length;i++)
{
    let line="";
    for(let j = 1;j<=i;j++){
        line+=alphabets[j-1];
    }
    console.log(line)
}


let n = 5;
for(let i = n;i>=1;i--){
    let line ="";
    for(let j = 1;j<=i;j++){
        line+="*";
    }
    console.log(line)
}

let n = 5;
for(let i = 1;i<=n;i++){
    let line = "";
    for(let j = 1;j<=i;j++){
        line+=i;
    }
    console.log(line)
}


let n = 5;
for(let i = 1;i<=n;i++){
    let line = "";
    for(let j = 1;j<=n-i;j++){
        line+=" ";
    }
    for(let j = 1;j<=(2*i-1);j++){
        line+="*";
    }
    console.log(line)
}