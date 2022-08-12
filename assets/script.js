var win = 0;
var lose = 0;
var ties = 0;

var playGame = confirm("Would you like to play the game?")
console.log(playGame);

if (playGame == false) {
    console.log("Stop the game");
}
else {
    var game = function () {
        console.log("Continue the game");

        var userChoice = prompt("Enter P, R or S");
        userChoice = userChoice.toUpperCase();
        console.log(userChoice);
        if (userChoice == null) {
            console.log("Stop the game");
        }
        else {
            var computerChoice = ["R", "P", "S"];
            var computerMath = Math.floor(Math.random() * computerChoice.length);
            var choice = computerChoice[computerMath];

            alert("Computer choose : " + choice);

            if (choice == computerChoice) {
                ties++;
                alert("Its a tie")
                
            }
            else if (
                (choice === "R") && (computerChoice === "P") ||
                (choice === "P") && (computerChoice === "S") ||
                (choice === "R") && (computerChoice === "S")
            ) {
                win++;
                alert("You win")
                
            }
            else {
                lose++;
                alert("You lose")
                
            }

            alert("No of win : " + win + "\nNo of lose : " + lose + "\nNo of ties : " + ties)
        }
        var playagain = confirm("Do you want to play again")
        if (playagain) {
            game();
        }

    }
}
game();


