let p1 = new Promise((resolve, reject) => {
    console.log("Promise pending.");
    setTimeout(() => {
        // console.log("I am a promise and i am resolved");
        resolve(true);
    }, 5000)
})

let p2 = new Promise((resolve, reject) => {
    console.log("Promise pending.");
    setTimeout(() => {
        // console.log("I am a promise and i am rejected");
        reject(new Error("I am an error."));
    }, 5000)
})

// console.log(p1, p2);

//To get the value
p1.then((value) => {
    console.log(value);
})
// p1.then(alert);

//To catch the errors
p2.catch((error) => {
    console.log("some error occurred in p2.");
    // console.log(error);
})

// p2.then((value) => {
//     console.log(value);
// }, (error) => {
//     console.log(error);
// })