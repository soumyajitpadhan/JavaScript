// Arithmetic Operators
let a = 10;
let b = 5;

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b); // 10 to the power 5

// console.log("a++ = ", a++);
// console.log("a = ", a);
// console.log("a-- = ", a--);
// console.log("a = ", a);

console.log("++a = ", ++a);
console.log("--a = ", --a);

// Assignment Operators
let x = 8;
console.log(x);
x += 2// same as x = x + 2 ;
console.log("x is now = ", x);
x -= 2
console.log("x is now = ", x);
x *= 2
console.log("x is now = ", x);
x /= 2
console.log("x is now = ", x);
x %= 2
console.log("x is now = ", x);
x **= 2
console.log("x is now = ", x);

//Comparison Operators
let comp1 = 6;
let comp2 = 7;
// let comp2 = "6";
console.log("comp1 == comp2 is ", comp1 == comp2)
console.log("comp1 != comp2 is ", comp1 != comp2)
console.log("comp1 === comp2 is ", comp1 === comp2)
console.log("comp1 !== comp2 is ", comp1 !== comp2)
console.log("comp1 > comp2 is ", comp1 > comp2)
console.log("comp1 < comp2 is ", comp1 < comp2)
console.log("comp1 >= comp2 is ", comp1 >= comp2)
console.log("comp1 <= comp2 is ", comp1 <= comp2)

// Logical Operators
let log1 = 5;
let log2 = 6;

console.log((log1 > log2) && (log1 == 5));
console.log((log1 > log2) || (log1 == 5));
console.log(!false);

//Ternary Operator
let age = 19;
console.log("You can", (age < 18 ? "not drive " : "drive"));

//comments
// This is single line comments
/* This is multiline
comments */