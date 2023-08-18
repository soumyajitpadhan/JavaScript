//Q1
/*let age = prompt("What is your age ?");
age = Number.parseInt(age)
if (age > 10 && age < 20) {
    console.log("Your age is lies between 10 and 20 ");
}
else {
    console.log("Your age does not lies between 10 and 20 ");
}*/

//Q2
/*let day = prompt("Enter a week no: ");
day = Number.parseInt(day)
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
}*/

//Q3
/*let num = prompt("Enter a number: ");
num = Number.parseInt(num);

if (num % 2 == 0 && num % 3 == 0) {
    console.log("Your number is divisible by 2 and 3");
}
else {
    console.log("Your number is not divisible by 2 and 3");
}*/

//Q4
/*let num = prompt("Enter a number: ");
num = Number.parseInt(num);

if (num % 2 == 0 || num % 3 == 0) {
    console.log("Your number is divisible by 2 and 3");
}
else {
    console.log("Your number is not divisible by 2 and 3");
}*/

//Q5
/*let age = prompt("What is your age ?")
age = Number.parseInt(age);

console.log("You can", age >= 18 ? "drive" : "not drive");*/

let age = 18;
let a = age >= 18 ? "You can drive " : "you can not drive";
console.log(a);