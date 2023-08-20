// Q1
console.log("har\"".length);

// Q2
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(sentence.includes(word));
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence `);

// Q3
let student = "SOUMYA";
console.log(student.toLowerCase());

// Q4
let str2 = "Please gives Rs 1000";
let amout = Number.parseInt(str2.slice("Please gives Rs ".length));
// let amout = Number.parseInt(str2.slice(16));
console.log(typeof amout);
console.log(amout);

// Q5
let friend = "Deepika";
friend[3] = "R"
console.log(friend); //friend is not change because string is immutable