/*
-----------------------------------------
JavaScript Bootcamp
Module 7: Strings
Day 26: String Methods
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

//String Methods(Slice , substring and includes)

const language1 = "JavaScript";
console.log(language1.slice(0,4));
console.log(language1.slice(4));

const college = "SCSVMV";
console.log(college.substring(0,3));
console.log(college.includes("VM"));


const website = "www.google.com";
console.log(`
Website : ${website}
First 3 Characters : ${website.slice(0,3)};
Contains "google" : ${website.includes("google")};
Contains "facebook" : ${website.includes("facebook")}`);

