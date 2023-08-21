let num = [1, 2, 3, 34, 4];
/*......... toString method .........*/
let b = num.toString(); //b is now a string
console.log(b);
console.log(typeof b);

/*......... join method .........*/
let c = num.join("_");
console.log(c);
console.log(typeof c);

/*......... pop method .........*/
// let r = num.pop();//pop returns the pop element
// console.log(num, r);

/*......... push method .........*/
// let s = num.push(56); //push returns the new array length
// console.log(num, s);

/*......... shift method .........*/
// let q = num.shift();
// console.log(num, q);//Removes an element from the start of the array

/*......... unshift method .........*/
// let d = num.unshift(78);
// console.log(num, d);//It returns new array length

/*......... delete method .........*/
// delete num[0];
// console.log(num);
// console.log(num.length);

/*......... concat method .........*/
// let num_more = [11, 12, 13, 14, 15];
// let num_even_more = [111, 122, 133, 144, 155];
// let newArray = num.concat(num_more, num_even_more);
// console.log(newArray);
// console.log(num, num_more);
// console.log(num_even_more);

/*......... sort method .........*/
let n = [554, 15, 31, 45, 35, 545, 546, 131,];
n.sort();
console.log(n);

let compare = (a, b) => {
    return a - b;
    // return b-a;
}
let n1 = [554, 15, 31, 45, 35, 545, 546, 131,];
n1.sort(compare);
console.log(n1);

/*......... reverse method .........*/
// console.log(num.reverse());

/*......... splice method .........*/
// let deletedValues = num.splice(1, 2, 2111, 2256);
// console.log(num);
// console.log(deletedValues);
// console.log(typeof deletedValues);

/*......... slice method .........*/
// let newNum = num.slice(1,3);
let newNum = num.slice(2);
console.log(newNum); 