const choices = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let userScore = 0;

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    let p = document.querySelector("#result");
    
    if (!p) {
        p = document.createElement("p");
        p.id = "result"; // Assign an id to easily find it later
        div2.appendChild(p);
           }
    
    if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        p.textContent = playerSelection + " beats " + computerSelection + ".  YOU WIN, VERY NICE!!";
        return "win";
    } else if (playerSelection === computerSelection) {
        p.textContent = "It's a TIE! You both choose " + playerSelection;
        return "tie";
    } else {
        p.textContent = computerSelection + " beats " + playerSelection + ".  YOU LOSE :(";
        return "lose";
    }

}

let body = document.querySelector("body");
let div2 = document.createElement("div");
div2.classList.add("divTwo");
let div = document.createElement("div");
div.classList.add("main")
body.appendChild(div);
body.appendChild(div2);

function playGame() {
    let btnR = document.createElement("button");
    btnR.classList.add("button");
    btnR.id = "buttonR";
    btnR.textContent = "Rock";

    btnR.onclick = function () {
        userSelection = "Rock";
        playRoundAndCheckGame(userSelection);
    }

    div.appendChild(btnR);

    let btnP = document.createElement("button");
    btnP.classList.add("button");
    btnP.id = "buttonP";
    btnP.textContent = "Paper";

    btnP.onclick = function () {
        userSelection = "Paper";
        playRoundAndCheckGame(userSelection);
    }

    div.appendChild(btnP);

    let btnS = document.createElement("button");
    btnS.classList.add("button");
    btnS.id = "buttonS";
    btnS.textContent = "Scissors";

    btnS.onclick = function () {
        userSelection = "Scissors";
        playRoundAndCheckGame(userSelection);
    }

    div.appendChild(btnS);
}

function playRoundAndCheckGame(userSelection) {
    const computerSelection = computerPlay();
    const result = playRound(userSelection, computerSelection);

    if (result === "win") {
        userScore++;
    } else if (result === "lose") {
        computerScore++;
    }
    if (userScore === 5) {
        alert("YOU WIN \nPress OK to play again");
        resetGame();
        return;
    }

    if (computerScore === 5) {
        alert("COMPUTER WINS \nPress OK to play again");
        resetGame();
        return;
    }

    function resetGame() {
        userScore = 0;
        computerScore = 0;
        updateScoreDisplay();
    }

function updateScoreDisplay() {
    let p = document.querySelector("#result2");

    if (!p) {
        p = document.createElement("p");
        p.id = "result2";
        div2.appendChild(p);
    }

    p.textContent = "Player Score: " + userScore + "\nComputer Score: " + computerScore;
}
    let p = document.querySelector("#result2");

    if (!p) {
        p = document.createElement("p");
        p.id = "result2";
        div2.appendChild(p);
    }

    p.textContent = "Player Score: " + userScore + "\nComputer Score: " + computerScore;
}

playGame();
