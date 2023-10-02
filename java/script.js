const choices = ["rock", "paper", "scissors"];
function computerPlay() {
        return choices[Math.floor(Math.random() * choices.length)];
}

function getUserChoice() {
    while (true) {
        const userPrompt = prompt("Rock, Paper or Scissors?");
        const userChoice = userPrompt ? userPrompt.toLowerCase() : '';
        
        if (choices.includes(userChoice)) {
            return userChoice;
        } else {
            alert("Please input either Rock, Paper, or Scissors");
        }
    }
}

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        alert(playerSelection + " beats " + computerSelection + " - You win, VERY NICE!!");
        return "win";       
    } else if (playerSelection === computerSelection) {
        alert("It's a tie! You both chose " + playerSelection);
        return "tie";
    } else {
        alert(computerSelection + " beats " + playerSelection + " - You lose :(");
        return "lose";
    }
}
   
function game (roundsTotal = 5) { 
    
let userScore = 0;
let computerScore = 0;
   
      for (let round = 1; round <= roundsTotal; round++) {
        const playerSelection = getUserChoice();
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection); {

    if (result === "win") {
        userScore ++;
    }

    else if (result === "lose"){
        computerScore ++;
    }

    alert(`Round ${round}/${roundsTotal} - User: ${userScore}, Computer: ${computerScore}`);
}
      }

    if (userScore > computerScore) {
        alert("You win the game!");
    } else if (userScore < computerScore) {
        alert("Computer wins the game!");
    } else {
        alert("It's a tie game!");
    }
}
   game();

