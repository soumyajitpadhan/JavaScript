// let ctitle = document.getElementsByClassName("card-title")[0]
// ctitle.style.color = "red"
// console.log(ctitle)

let ctitle = document.getElementById("firstcardtitle")
ctitle.style.color = "red"

let ctitle1 = document.querySelectorAll(".card-title")
ctitle1[0].style.color = "red"
ctitle1[1].style.color = "blue"
ctitle1[2].style.color = "green"
console.log(ctitle1)

document.querySelector(".this").style.color = "black"
document.querySelector(".this").style.background = "yellow"

console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))

console.log(document.getElementsByName("search"));
