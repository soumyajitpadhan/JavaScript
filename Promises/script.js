let promise = new Promise(function (resolve, reject) {
    alert("Hello")
    // alertt("Hello")
    resolve(56);
    reject(65);
})

console.log("Hello");
setTimeout(function () {
    console.log("Hello in 2 seconds")
}, 2000)

console.log("My name is Rahul.");

console.log(promise);

//Fetch google.com homepage ==> console.log("google.com homepage done")
//Fetch data from the data api
//Fetch pictures from the server
//print downloading
//Rest the script
