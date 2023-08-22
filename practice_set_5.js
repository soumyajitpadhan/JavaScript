// Q1
/*let arr = [1, 2, 3, 4, 5, 6, 7, 83];
let a = prompt("Enter a number:");
a = Number.parseInt(a);
arr.push(a);
console.log(arr);*/

// Q2
/*let arr = [1, 2, 3, 4, 5, 6, 7, 83];
let a;
do {
    a = prompt("Enter a number:");
    a = Number.parseInt(a);
    arr.push(a);
} while (a != 0);

console.log(arr);*/

// Q3
/*let arr = [1, 2, 30, 4, 50, 6, 70, 83];
let a = arr.filter((value) => {
    return value % 10 == 0;
})

console.log(a);*/

// Q4
/*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let a = arr.map((value) => {
    return value * value;
})

console.log(a);*/

// Q5
let arr = [1, 2, 3, 4, 5];
let a = arr.reduce((v1, v2) => {
    return v1 * v2;
})
console.log(a);