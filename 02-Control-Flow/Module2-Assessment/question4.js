/*
Question 4
Restaurant Menu
Take input: 1,2,3,4
Menu:
1 → Pizza
2 → Burger
3 → Sandwich
4 → Pasta
If the user enters any other number:
Invalid Choice
Use a switch statement.
*/

const readline = require("readline-sync");
choice = Number(readline.question("Enter your Choice: "));
switch (choice){
    case 1:
        console.log(`1-->Pizza`);
        break;
    case 2:
        console.log(`2-->Burger`);
        break;
    case 3:
        console.log(`3-->Sandwich`);
        break;
    case 4:
        console.log(`4-->Pasta`);
        break;
    default:
        console.log(`Invalid Choice`)
}