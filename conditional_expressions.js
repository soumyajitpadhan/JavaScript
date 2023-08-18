// prompt and alert function
//Run on chrome console

/* let a = prompt("Hey whats your age?")
a = Number.parseInt(a)
if(a > 0) {
    alert("This is a valid age")
} 
else {
    alert("This is not valid age")
} */

//Typecasting
/* let a = "45";
console.log(typeof a);
a = Number.parseInt(a);//Converting the string to a number
console.log(typeof a); */


//if statement
/* let a = 5
if (a > 0) {
    console.log("This is a valid age")
} */


//if...else statements
/*let a = 5;
if (a > 0) {
    console.log("This is a valid age")
}
else {
    console.log("This is not valid age")
}*/


//if...else if....else statements
/*let a = 9;
let b = 6;
let c = 2;

if (a >= b && a >= c) {
    console.log("a is greater.")
}
else if (b >= a && b >= c) {
    console.log("b is greater.")
}
else {
    console.log("c is greater")
}*/


//Switch statements
let day = 4;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid input.");
}