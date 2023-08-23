// alert("Hello");
// console.log("Jai Shree Ram");
// let a = 4;
// let b = 2;
// console.log(a + b);

/* JS console object */
console.log(console);

console.log("Hy Rahul");

console.error("This is a error");

console.assert(5 > 53);
console.assert(555 > 53);

console.clear();

const obj = { a: 1, b: 2, c: 3 };
console.table(obj);

console.warn("Hey please don't drink soda");

console.info("Hey this is an important info");

console.time("a");
console.timeEnd("a");
// Example - Comparing time of for and while loop
console.time("forLoop");
for (let i = 0; i < 5; i++) {
    console.log("Hy");
}
console.timeEnd("forLoop");

console.time("whileLoop");
let i = 0;
while (i < 5) {
    console.log("Hy");
    i++;
}
console.timeEnd("whileLoop");

