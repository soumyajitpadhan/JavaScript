//..........for loops...........
/*for (let i = 1; i <= 10; i++) {
    console.log(i);
}*/


//.............for-in-loops...........
/*let obj = {
    Rahul: 100,
    Subha: 70,
    Ritika: 55,
    Shibika: 75,
    Rohan: 58
}

for (let a in obj) {
    // console.log(a);
    console.log("Marks of " + a + " are " + obj[a]);
}*/


//.............for-of-loops............
/*for (let b of "Rahul") {
    console.log(b);
}*/



//Program to add first n natural number
/*let n = prompt("Enter the value of n: ");
n = Number.parseInt(n);
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("Sum of first " + n + " natural number is: ", sum);*/

let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log("Sum of n natural number is: ", sum);


//Factorial of a number
/* let n = prompt("Enter the value of n: ");
n = Number.parseInt(n);
let fact = 1;
for (let i = 1; i <= n; i++) {
    fact *= i;
}
console.log("Factorial of " + n + " is : ", fact); */