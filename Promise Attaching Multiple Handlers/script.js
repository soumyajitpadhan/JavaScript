let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        alert("Hey i am not resolved.")
        resolve(1);
    }, 2000)
})

p1.then(() => {
    console.log("Congratulation this promise is now resolved");
})

p1.then(() => {
    console.log("Hurray");
})