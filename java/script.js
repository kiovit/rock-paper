while (true) {
function getComputerChoice() {

    let x = Math.floor(Math.random() * (4 - 1)) + 1;
    
    getComputerChoice = x;
    
}

function getUserChoice() {
    let userPrompt = prompt("Rock, Paper or Scissors?");
    if (userPrompt.toLowerCase() === "rock") {
        return getUserChoice = 1;
    }

    else if (userPrompt.toLowerCase() === "paper") {
        return getUserChoice = 2;
    }

    else if (userPrompt.toLowerCase() === "scissors") {
        return getUserChoice = 3;
    }

    else if (userPrompt.toLowerCase() != "rock", "paper", "scissors"){
        alert("Please input either Rock, Paper or Scissors")
    }

}

const playerSelection = getUserChoice();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {

    if ((getUserChoice) > (getComputerChoice)) {
        alert("You played " + getUserChoice + " computer plays " + getComputerChoice + ". You win, VERY NICE!!")
    }
    else if ((getUserChoice) < (getComputerChoice)) {
        alert("You played " + getUserChoice + " computer plays " + getComputerChoice + ". You lose!")
    }
    else if ((getUserChoice) == (getComputerChoice)) {
        alert("You played " + getUserChoice + " computer plays " + getComputerChoice + ". It's a draw!")
    }

}

console.log(playRound(playerSelection, computerSelection));
}
