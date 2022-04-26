// Set selection of rock, paper, scissors
const selection = ["rock", "paper", "scissors"];

// Set
let playerClick = "";
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let totalRounds = 5;

document.querySelector("#playerScore").innerText = playerScore;
document.querySelector("#computerScore").innerText = computerScore;
document.querySelector("#tieScore").innerText = tieScore;

// Get player selection
function getPlayerSelection() {
  let input = playerClick;
  console.log("Player chooses " + input);
  return input;
}

// Get random selection from computer
function getComputerSelection() {
  let result = selection[Math.floor(Math.random() * selection.length)];
  console.log("Computer chooses " + result);
  return result;
}

// Compare selections to choose winner
function playRound() {
  let playerSelection = getPlayerSelection();
  let computerSelection = getComputerSelection();
  let winner;
  if ((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")) {
    winner = " * Player wins.";
    playerScore++;
    document.querySelector("#playerScore").innerText = playerScore;
  }
  else if ((computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")) {
    winner = " * Ouch! Computer wins.";
    computerScore++;
    document.querySelector("#computerScore").innerText = computerScore;
  }
  else {
    winner = ` * No winners here, ${computerSelection} does not beat ${playerSelection}.`;
    tieScore++;
    document.querySelector("#tieScore").innerText = tieScore;
  }
  console.log(winner);
  return winner;
}

// Play totalRounds number of rounds
function playGame() {
  if (playerScore < 5 && computerScore < 5) {
    playRound();
    console.log(playerScore, computerScore, tieScore);
  }
}

// Calculate and declare winner
function calculateWinner() {
  if (playerScore > computerScore) {
    console.log(" *** You beat the computer, best of five.")
  }
  else if (computerScore > playerScore) {
    console.log(" *** The computer beat you.  Skynet launch imminent.")
  }
  else {
    console.log(" *** You are evenly matched with the computer.")
  }
}

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

// playGame();
// calculateWinner();