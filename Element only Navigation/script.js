const changeBgRed = () => {
    document.body.firstElementChild.style.background = "red";
}



let b = document.body;
console.log("First child of b is: ", b.firstChild)
console.log("First element child of b is: ", b.firstElementChild)
console.log("Last element child of b is: ", b.lastElementChild)
console.log("Next Siblings of b is: ", b.firstElementChild.nextElementSibling)                    
