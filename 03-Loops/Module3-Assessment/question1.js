/* Number Printer
Take input from the user.
Example:
Enter a Number: 7
Output:
1
2
3
4
5
6
7
Use a for loop. */
const readline = require("readline-sync");
let number = Number(readline.question("Enter a Number: "))
for (let i = 1; i<= number; i++){
    console.log(i);
}