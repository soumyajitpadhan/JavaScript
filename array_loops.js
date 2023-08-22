let num = [3, 5, 1, 2, 4];

// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }

/*...........forEach loops...........*/
num.forEach((element) => {
    console.log(element * element);
})

/*...........Array.from..........*/
let name1 = "Rahul";
let arr = Array.from(name1)
console.log(arr);

/*...........for of loops...........*/
for (let i of num) {
    console.log(i);
}

/*...........for in loops...........*/
for (let i in num) {
    // console.log(i);
    console.log(num[i]);
}
