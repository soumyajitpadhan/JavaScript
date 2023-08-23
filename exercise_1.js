/* Guess the number */
console.log("Guess a number between 1 to 100.");
let random_number = Math.floor(Math.random() * 100);
let chances = 0;
let user_input;

while (user_input != random_number) {

    user_input = prompt("Enter a number: ")
    user_input = Number.parseInt(user_input);

    if (user_input < random_number) {
        console.log("Enter number is less then the random number.");
    }
    else {
        console.log("Enter number is greater then the random number.");
    }
    chances++;
}

console.log("The actual number is: ", random_number);
console.log("Your score is : ", 100 - chances);