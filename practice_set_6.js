// Q1
/*let user_age = prompt("Enter your age: ");
user_age = Number.parseInt(user_age);

const canDrive = (age) => {
    return age >= 18 ? true : false;
}

if (canDrive(user_age)) {
    alert("Yes you can drive");
}
else {
    alert("you cannot drive");
}*/

// Q2
/* let runAgain = true;

const canDrive = (age) => {
    return age >= 18 ? true : false;
}

while (runAgain) {

    let user_age = prompt("Enter your age: ");
    user_age = Number.parseInt(user_age);

    if (canDrive(user_age)) {
        alert("Yes you can drive");
    }
    else {
        alert("you cannot drive");
    }

    runAgain = confirm("Do you want you to play again");

}*/

// Q3
/* let runAgain = true;

const canDrive = (age) => {
    return age >= 18 ? true : false;
}

while (runAgain) {

    let user_age = prompt("Enter your age: ");
    user_age = Number.parseInt(user_age);

    if (user_age < 0) {
        console.error("Please enter a valid age.");
        break;
    }

    if (canDrive(user_age)) {
        alert("Yes you can drive");
    }
    else {
        alert("you cannot drive");
    }

    runAgain = confirm("Do you want you to play again");

}*/

// Q4
/* let num = prompt("Enter a number: ");
num = Number.parseInt(num);

if (num > 4) {
    location.href = "https://google.com";
} */

// Q5
let color = prompt("Enter the page background color ");
document.body.style.background = color;