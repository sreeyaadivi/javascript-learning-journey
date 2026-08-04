// 🚀 JavaScript Bootcamp – Module 7 Mini Project
// 📚 String Utility Toolkit

//Step 1 – Create a String
const text = "   JavaScript is Awesome. JavaScript is Powerful.   ";
//Step 2 – Display Original Information
console.log(`
Orginal Text : ${text}
length : ${text.length}
Trimmed Text : ${text.trim()}
Trimmed Lenght : ${text.trim().length}`);

//Step 3 – Case Conversion
console.log(`
Upper case : ${text.trim().toUpperCase()}
Lower Case : ${text.trim().toLowerCase()}
`);

//Step 4 – Search Operations
console.log(`
Does it contain "Awesome"? : ${text.trim().includes("Awesome")}
Does it start with "Java" : ${text.trim().startsWith("Java")}
Does it end with "Powerful". : ${text.trim().endsWith("Powerful")}
First index of "JavaScript" : ${text.trim().indexOf('JavaScript')}
Last index of "JavaScript" : ${text.trim().lastIndexOf('JavaScript')}
`);

//Step 5 – Extract Text
console.log(`
First 10 characters : ${text.trim().slice(0,11)}
First 10 characters : ${text.trim().substring(0,11)}
`);

//Step 6 – Replace Text
console.log(`
Replacing "Awesome" with "Amazing" : ${text.trim().replace("Awesome","Amazing")}
Replacing Javascript with JS : ${text.trim().replaceAll("JavaScript","JS")}
`);

//Step 7 – Split the String
console.log(`
${text.trim().split(" ")} `);

//Step 8 – Character Operations
console.log(`
${text.trim().charAt(0)}
${text.trim().charAt(text.trim().length - 1)}
 `);
//Step 9 – Repeat
 const equal = "="
 console.log(equal.repeat(30));

//Step 10 – Concat
const first = "Happy";
const second = " Coding!";
console.log(first.concat(second));
