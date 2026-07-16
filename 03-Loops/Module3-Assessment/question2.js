/*Even Numbers
Take input.
Example:
Enter Limit: 20
Output:
2
4
6
8
10
12
14
16
18
20
Use a while loop */
const readline = require("readline-sync");
let number = Number(readline.question("Enter limit: "))
let i  = 2;
while(i<=number){
    console.log(i);
    i +=2;
}