/*...........setTimeout......... */

// document.write("Hello")

// const sum = (a, b) => {
//     console.log("Yes i am running" + (a + b));
// }

// setTimeout(sum, 3000, 1, 2); // (function_name, delay, argument1, argument2)


// let a = setTimeout(function () {
//     alert("I am inside the setTimeout")
// }, 5000)

// let b = prompt("Do you want to run the setTimeout ?");
// if (b == "n") {
//     clearTimeout(a)
// }

// console.log(a)

/*...........setInterval......... */

const mul = (a, b) => {
    console.log("yes i am running " + (a * b));
    // document.write("yes i am running " + (a * b));
}

setInterval(mul, 3000, 5, 6);

// let s = setInterval(function () {
//     alert("setInterval")
// }, 3000)

// let v = prompt("Do you want to run the setInterval ?");
// if (v == "n") {
//     clearInterval(s);
// }