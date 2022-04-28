// Set selection of rock, paper, scissors
const selection = ["rock", "paper", "scissors"];

// Get random selection from computer
function getComputerSelection() {
  let result = selection[Math.floor(Math.random() * selection.length)];
  return result;
}

// Set
let playerClick = "";
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

// Get and set playerClick
document.querySelector("#rock").addEventListener("click", setRock);
document.querySelector("#paper").addEventListener("click", setPaper);
document.querySelector("#scissors").addEventListener("click", setScissors);

function setRock() {
  playerClick = "rock";
  playGame();
}

function setPaper() {
  playerClick = "paper";
  playGame();
}

function setScissors() {
  playerClick = "scissors";
  playGame();
}

// Play round if no one has scored 5
function playGame() {
  if (playerScore < 5 && computerScore < 5) {
    playRound();
    calculateWinner();
  }
}

// Compare selections to choose winner
function playRound() {
  let playerSelection = playerClick;
  let computerSelection = getComputerSelection();
  let winner;
  if ((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")) {
    winner = "Player wins";
    playerScore++;
    document.querySelector("#playerScore").innerText = playerScore;
  }
  else if ((computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")) {
    winner = "Ouch! Computer wins";
    computerScore++;
    document.querySelector("#computerScore").innerText = computerScore;
  }
  else {
    winner = `No winners here, ${computerSelection} does not beat ${playerSelection}`;
    tieScore++;
    document.querySelector("#tieScore").innerText = tieScore;
  }
  document.querySelector("header>p").innerText = ("Player chose " + playerSelection + " & " + "Computer chose " + computerSelection);
  document.querySelector(".game>h2").innerText = winner;
  return winner;
}

// Calculate and declare winner
function calculateWinner() {
  if (playerScore == 5 || computerScore == 5 || tieScore == 10) {
    let gameWinner = "";
    if (playerScore > computerScore) {
      gameWinner = "You beat the computer, first to 5!"
    }
    else if (computerScore > playerScore) {
      gameWinner = "The computer beat you, Skynet launch imminent!"
    }
    else {
      gameWinner = "You are evenly matched with the computer!"
    }
    document.querySelector(".game>h2").innerText = gameWinner;
    return gameWinner;
  }
}

// Show scores on page
document.querySelector("#playerScore").innerText = playerScore;
document.querySelector("#computerScore").innerText = computerScore;
document.querySelector("#tieScore").innerText = tieScore;