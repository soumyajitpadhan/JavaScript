/*let p = fetch("https://goweather.herokuapp.com/weather/NewYork")
p.then((response) => {
    return response.json()
}).then((response) => {
    console.log(response)
})*/


let p = fetch("https://goweather.herokuapp.com/weather/NewYork");
p.then((response) => {
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);

    // console.log(response.text());
    return response.json();
}).then((value2) => {
    console.log(value2);
})
