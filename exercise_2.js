let playAgain = true;

while (playAgain) {

    let user = prompt("Enter s for snake , w for water, g for gun");
    let computer = Math.floor(Math.random() * 3);
    if (computer == 0) {
        computer = "s";
    }
    else if (computer == 1) {
        computer = "w";
    }
    else {
        computer = "g";
    }

    const match = (computer, user) => {
        
        if (computer == user) {
            return "Nobody";
        }
        else if (computer == 's' && user == 'w') {
            return "computer";
        }
        else if (computer == 'w' && user == 's') {
            return "user";
        }
        else if (computer == 'g' && user == 's') {
            return "computer";
        }
        else if (computer == 's' && user == 'g') {
            return "user";
        }
        else if (computer == 'w' && user == 'g') {
            return "computer";
        }
        else if (computer == 'g' && user == 'w') {
            return "user";
        }

    }

    let result = match(computer, user);
    console.log("You chose " + user + " and computer chose " + computer + "\nThe winner is : " + result);

    playAgain = confirm("Do you want to play again ?");

}