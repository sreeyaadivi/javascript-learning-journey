/*
Secure Login System
Take input: Username and Password
If username === "admin"
↓
Check password
↓
If password === 1234
↓
Login Successful
Else
Incorrect Password
Else
Invalid Username
Use: Nested if and ===
*/

const readline = require("readline-sync");
username = readline.question("Enter your username: ");
password = Number(readline.question("Enter your password: "));

if (username ==="admin"){
    if (password === 1234){
        console.log("Login Successful");
    }
    else {
        console.log("Incorrect Password");
    }
}
else{
    console.log("Invalid Username")
}