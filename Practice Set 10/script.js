// Question - 1 -> 
// ............Contests app...............

let url = "https://kontests.net/api/v1/all";
let response = fetch(url);
response.then((v) => {
    return v.json();
}).then((contests) => {
    console.log(contests);
    ihtml = ""
    for (item in contests) {
        console.log(contests[item]);
        ihtml += `
        <div class="card mx-2 my-2" style="width: 22rem;">
        <img src="https://media.istockphoto.com/id/1193698730/video/mans-hands-coding-on-laptop-close-up-man-using-portable-computers-man-programmer-writes-code.jpg?s=640x640&k=20&c=QUvOTUEJBXa889HtXbzIQY0dZBXY_jEjEvbJU3seEcI=" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${contests[item].name}</h5>
            <p class="card-text">Status is ${contests[item].status} and site is ${contests[item].site} </p>
            <p class="card-text">In 24 Hours? ${contests[item].in_24_hours}</p>
            <p>Starts at :${contests[item].start_time}
            <p>Starts at :${contests[item].end_time}
            <a href="${contests[item].url}" class="btn btn-primary my-4">Visit Contest</a>
        </div>
    </div>
        `
    }
    cardContainer.innerHTML = ihtml
})


/* .............NOTES APP............ */
// Question - 2
/*let a = prompt("Enter your note");
localStorage.setItem("note", a);*/

// Question - 3
/*let n = localStorage.getItem("note")
alert("Your note is " + n);

let a = prompt("Enter your note");
if (a) {
    localStorage.setItem("note", a);
}*/

// Question - 4
/*let n = localStorage.getItem("note");
alert("Your note is " + n);

let a = prompt("Enter your note");
if (a) {
    localStorage.setItem("note", a);
}

let c = confirm("Do you want you delete your note?");
if (c) {
    localStorage.removeItem("note");
    alert("Note deleted successfully!")
}*/
