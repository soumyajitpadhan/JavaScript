function sum(x, y) {
    return x + y;
}

function average(x, y) {
    return (x + y) / 2;
    // return Math.round((x + y) / 2);
}

//Arrow functions
const multiplication = (p, q) => {
    return p * q;
}

const hello = () => {
    console.log("Hey how are you?");
}

let a = 1;
let b = 2;
let c = 3;

console.log("sum of a and b is: ", sum(a, b));
console.log("sum of b and c is: ", sum(b, c));
console.log("sum of a and c is: ", sum(a, c));

console.log("Avg of a and b is: ", average(a, b));
console.log("Avg of b and c is: ", average(b, c));
console.log("Avg of a and c is: ", average(a, c));

console.log("Multiplication of a and b is: ", multiplication(a, b));
console.log("Multiplication of b and c is: ", multiplication(b, c));
console.log("Multiplication of a and c is: ", multiplication(a, c));

hello();