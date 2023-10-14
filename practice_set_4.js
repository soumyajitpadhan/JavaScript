// Q1
console.log("har\"".length);

// Q2
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(sentence.includes(word));
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence `);

const str1 = 'Saturday night plans';
console.log(str1.startsWith('Sat'));
console.log(str1.startsWith('Sat', 0));//startsWith(searchString, position)
console.log(str1.startsWith('at'));

console.log(str1.endsWith('ans'));
console.log(str1.endsWith('ans',20));
console.log(str1.endsWith('as'));

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
friend[3] = "R";
console.log(friend); //friend is not change because string is immutable
