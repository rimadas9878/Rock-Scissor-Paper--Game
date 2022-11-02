    let win = 0;
    let lose= 0;
    let tie = 0;

    let myArr = ["Rock", "Paper", "Scissors"];

    playGame = () => {
        let userPrompt = window.prompt("Enter Rock, Paper or Scissors");

        if(!userPrompt){
            console.log("Enter some value")
        }
    
        let Input = Math.floor(Math.random() * myArr.length);
        let computerInput = myArr[Input];
    
        window.alert("Computer chose the word : "+ computerInput);
    
        if(userPrompt === computerInput){
            tie++;
            window.alert("Its a tie")
            
        }
        else if 
        (
            (userPrompt === "Rock" && computerInput === "Scissors") ||
            (userPrompt === "Paper" && computerInput === "Rock") ||
            (userPrompt === "Scissors" && computerInput === "Paper")
        ){
            win++;
            window.alert("You Won");
            
        }
        else{
            lose++;
            window.alert("You lost");
            
        }
        window.alert(
            "Stats:\nWins : " + win + "\nlose : " + lose + "\ntie : " + tie 
            );

            playAgain();
    }

    playAgain = () =>{
        window.confirm("PlayAgain?");
        if(playAgain)
        {
            playGame();
        }
        
    } 
    
 playGame();
 