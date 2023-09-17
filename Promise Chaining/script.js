/*let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Resolved after 2 seconds.");
        resolve(56);
    }, 2000)
})

p1.then((value) => {
    console.log(value);

    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 2");
        }, 2000)
    })
    return p2;

}).then((value) => {
    console.log(value);
    console.log("We are done.");
    return 2;
}).then((value) => {
    console.log("Now we are pakka done.")
})*/


//.........LoadScript using Promises..........
const loadScript = (src) => {

    return new Promise((resolve, reject) => {

        let script = document.createElement("script");
        script.src = src;
        document.body.appendChild(script);

        script.onload = () => {
            // console.log("Script Loaded.");
            resolve("Script has been loaded sir.");
        }
        script.onerror = () => {
            reject(0);
        }

    })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js");

p1.then((value) => {
    console.log(value);
    return loadScript("https://cdn.jsdelivrr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js");
}).then((value) => {
    console.log(value);
    console.log("Second Script ready");
}).catch((error) => {
    console.log(error);
    console.log("We are sorry but we are problems loading this script");
})  