while (true) {
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getUserChoice() {
    while (true) {
        const userPrompt = prompt("Rock, Paper or Scissors?");
        const userChoice = userPrompt.toLowerCase();
        
        if (choices.includes(userChoice)) {
            return userChoice;
        } else {
            alert("Please input either Rock, Paper, or Scissors");
        }
    }
}

const choices = ["rock", "paper", "scissors"];
const playerSelection = getUserChoice();
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        alert(playerSelection + " beats " + computerSelection + " - You win, VERY NICE!!");
    } else if (playerSelection === computerSelection) {
        alert("It's a tie! You both chose " + playerSelection);
    } else {
        alert(computerSelection + " beats " + playerSelection + " - You lose :(");
    }
}

playRound(playerSelection, computerSelection);

}