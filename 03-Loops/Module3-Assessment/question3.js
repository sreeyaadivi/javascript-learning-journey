/**Reverse Number Pattern
Take input. */

const readline = require("readline-sync");
let number = readline.question("Enter Rows: ");
for (let i = number; i >= 1; i--){
    let line = ""
    for(let j = 1; j <= i; j++){
        line+= j +" ";
    }
    console.log(line)
}
