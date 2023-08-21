let num = [1, 2, 3, 34, 4];
let b = num.toString(); //b is now a string
console.log(b);
console.log(typeof b);

let c = num.join("_");
console.log(c);
console.log(typeof c);

// let r = num.pop();//pop returns the pop element
// console.log(num, r);

// let s = num.push(56); //push returns the new array length
// console.log(num, s);

// let q = num.shift();
// console.log(num, q);//Removes an element from the start of the array

let d = num.unshift(78);
console.log(num, d);//It returns new array length
