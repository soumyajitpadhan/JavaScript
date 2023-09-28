console.log(document.cookie);
document.cookie = "name=rahul1234567"
document.cookie = "name2=rahul1234567"
document.cookie = "name=rahul"
let key = prompt("Enter your key");
let value = prompt("Enter your value");

document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// decodeURIComponent("a%3B%3B")
// document.cookie = "1=2;3=4"

console.log(document.cookie);


