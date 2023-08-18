// Primitive Data Types in Js

// nn bb ss u
//(null, number) (boolean, bigInt) (string, symbol) (undefined)

let a = null;
let b = 7;
let c = true; // can also be false
let d = BigInt("567");
// let d = BigInt("567") + BigInt("3");
let e = "Rahul";
let f = Symbol("I am a nice symbol");
// let g = undefined;
let g;
console.log(a, b, c, d, e, f, g);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);

//Non Primitives Data Type - Objects in Js
const item = {
    "Rahul": true,
    "Shubh": false,
    "Rohan": 77,
    "Lovish": undefined
}

console.log(item["Rahul"]);
console.log(item["Shubh"]);
console.log(item["Rohan"]);
console.log(item["Lovish"]);
console.log(item["lkj"]);

