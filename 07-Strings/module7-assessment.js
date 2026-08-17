//Create a string:
const language = "JavaScript";
//Print:Length First Character Last Character
console.log(`
    length : ${language.length}
    first character : ${language[0]}
    Last Character  : ${language[language.length - 1]}`);


//Create and Print: Character at index 3 Character at index 7

const city = "Hyderabad";
console.log(`
    3 index character : ${city[3]}
    7 index  Character  : ${city[7]}`);

// Create and Print: Original Length, Trimmed String,Trimmed Length
const username = "   Sreeya   ";
console.log(`
original length: ${username.length}
trimmed string: ${username.trim()}
trimmed length: ${username.trim().length}
`);

// Create:Print: Original Uppercase Lowercase
const language1 = "javascript";
console.log(`
original String: ${language1}
uppercase string: ${language1.toUpperCase()}
lowercase string: ${language1.toLowerCase()}
`);

// Create and Print:
// includes("Awesome")
// startsWith("Java")
// c
const sentence = "JavaScript is Awesome";
console.log(`
includes("Awesome"): ${sentence.includes("Awesome")}
startsWith("Java"): ${sentence.startsWith("Java")}
startsWith("Java"): ${sentence.endsWith("Java")}
`);

//– Search & Extract first 10 characters using slice() and First 10 characters using substring()
const text = "JavaScript Programming";
console.log(`
${text.slice(0,10)}
${text.substring(0,10)}
`);

//create and print First occurrence of "a" and Last occurrence of "a"
const word = "banana";
console.log(`
${word.indexOf("a")}
${word.lastIndexOf("a")}
    `);

//Replace & Split create and print:
// Replace first "Java" with "Python"
// Replace all "Java" with "Python"
const sentence1 = "I like Java. Java is easy.";
console.log(`
${sentence1.replace("Java","Python")}
${sentence1.replaceAll("Java","Python")}
`);

//Create and Split the string into an array and print it.
const fruits = "Apple,Mango,Grapes";
console.log(`
${fruits.split(",")}`);

//Create and Print: ********** using repeat().
const star = "*";
console.log(`
${star.repeat(10)}`);

//create and Print the 4th character using charAt().
const name = "Sreeya";
console.log(name.charAt(4));

//create and Join them using concat(). and Print the result.
const first = "Hello";
const second = " World";
console.log(first.concat(second));

//create and Print:Does it start with "www"? and Does it end with ".com"?
const website = "www.google.com";
console.log(`
Does it start with "www"?: ${website.startsWith("www")}
Does it end with ".com"?: ${website.endsWith(".com")}
`);