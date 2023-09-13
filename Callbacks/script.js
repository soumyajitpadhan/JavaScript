/*//Synchronous Programming (one by one)
let a = prompt("What is your name?");
let b = prompt("What is your age?");
let c = prompt("What is your favorite color?");
console.log(a + " is " + b + " years old and has " + c + " favorite color.");

//Asynchronous Programming
console.log("Start");
setTimeout(function () {
    console.log("Hey i am good")
}, 3000)
console.log("End");*/

/*// ..........Callbacks............
function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;

    script.onload = function () {
        console.log("Loaded script with SRC: " + src);
        callback(src);
    }

    document.body.appendChild(script);
}

function hello(src) {
    alert("Hello World " + src);
}

function goodmorning(src) {
    alert("Good Morning." + src);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js", hello);*/

// ...........Handling errors.............
function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;

    script.onload = function () {
        console.log("Loaded script with SRC: " + src);
        callback(null, src);
    }

    script.onerror = function () {
        console.log("Error loading script with SRC: " + src);
        callback(new Error("Src got some error."));
    }

    document.body.appendChild(script);
}

function hello(error, src) {
    if (error) {
        console.log(error);
        return;
    }
    alert("Hello World " + src);
}

function goodmorning(error, src) {
    if (error) {
        console.log(error);
        return;
    }
    alert("Good Morning" + src);
}

loadScript("https://cdn.jsdelivrr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js", hello);
