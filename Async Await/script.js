/*async function rahul() {
    return 5;
}

rahul().then((x) => {
    alert(x);
})*/


async function rahul() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 Deg");
        }, 2000)
    })

    let bengaloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 Deg");
        }, 5000)
    })

    // delhiWeather.then(alert);
    // bengaloreWeather.then(alert);

    console.log("Fetching Delhi Weather Please Wait........")
    let delhiW = await delhiWeather;
    console.log("Fetched Delhi Weather is " + delhiW);

    console.log("Fetching Bengalore Weather Please Wait........")
    let bengaloreW = await bengaloreWeather;
    console.log("Fetched Bengalore Weather is " + bengaloreW);

    return [delhiW, bengaloreW];

}

const soumya = () => {
    console.log("Hey i am soumya and i am not waiting.");
}


console.log("Welcome to weather control room");
let a = rahul();
let b = soumya();
// console.log(a);
a.then((value) => {
    console.log(value);
})



/*const soumya = async () => {
    console.log("Hey i am soumya and i am waiting.");
}

const main1 = async () => {
    console.log("Welcome to weather control room");
    let a = await rahul();
    let b = await soumya();
}

main1();*/