// Q1
/*let marks = {
    Rahul: 90,
    Subham: 65,
    Monika: 58,
    Lovish: 25
}


// for (let i = 0; i < Object.keys(marks).length; i++) {
//     console.log("The mark of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
// }


// Q2
for (let key in marks) {
    console.log("The Mark of " + key + " is " + marks[key]);
} */

// Q3
/*let cn = 4;
let i;
while (i != cn) {
    console.log("Try again");
    i = prompt("Enter a number: ");
}
console.log("You have entered a correct number.");*/

// Q4
const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4;
}

console.log(mean(4, 5, 6, 7));