/*.....mao method.....*/

let arr1 = [15, 56, 46];
// console.log(arr); 
let a = arr1.map((value, index, array) => {
    console.log(value, index, array);
    return value + 1;
})
console.log(a, arr1);

/*.....filter method.....*/
let arr2 = [16, 86, 26, 0, 3, 5];
let a2 = arr2.filter((value) => {
    return value < 10;
})
console.log(a2, arr2);

/*.....reduce method.....*/
let arr3 = [1, 2, 3, , 5, 2, 1];

const reduce_func = (h1, h2) => {
    return h1 + h2;
}
let a3 = arr3.reduce(reduce_func);

// let a3 = arr3.reduce((value1, value2) => {
//     return value1 + value2;
// })
console.log(a3);