//  Question-1
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "Red";

//  Question-3
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "Green";
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "Green";

//  Question-4
Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.background = "cyan";
})

