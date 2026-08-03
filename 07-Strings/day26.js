/*
-----------------------------------------
JavaScript Bootcamp
Module 7: Strings
Day 26: String Methods(Upper Lower and Trim)
-----------------------------------------
*/


const language = "javascript";
console.log(language);
console.log(language.toUpperCase());
console.log(language.toLowerCase());

const username = "   Sreeya   ";
console.log(username.length);
console.log(username.trim());
console.log(username.trim().length);


const email = "   SREEYA@GMAIL.COM   ";
console.log(`
Original : ${email}
Trimmed : ${email.trim()}
Lowercase: ${email.trim().toLowerCase()}
Length after Trim : ${email.trim().length}`)