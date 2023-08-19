/*let n = "Rahul";

console.log(n);
console.log(n.length);

// let friend = "prakash'; //Dont do this
let friend = 'prakash';
console.log(friend);

console.log(n[0]);

// for(let a of n) {
//     console.log(a);
// }*/

//..........Template literals.............
let boy1 = "Pramod";
let boy2 = "Nikhil";

let sentence = `${boy2} is a friend of ${boy1}`;
console.log(sentence);

//...........Escape Sequence Characters.............
// let fruit = 'Bana\'na'
// console.log(fruit);
// console.log(fruit.length);

let fruit = "Bana\"na"
console.log(fruit);
console.log(fruit.length);

let fruit1 = 'Bana\nna';
console.log(fruit1);

let fruit2 = 'Bana\tna';
console.log(fruit2);

let fruit3 = 'Bana\rna';
console.log(fruit3);