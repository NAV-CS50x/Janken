// Set selection of rock, paper, scissors
const selection = ["rock", "paper", "scissors"];

// Set
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let totalRounds = 5;

// Get valid selection from player
function getPlayerSelection() {
  let input = prompt("Choose rock, paper, or scissors!");
  while (!selection.includes(input.toLowerCase())) {
    alert("Please enter a valid answer.")
    input = prompt("Choose rock, paper, or scissors!")
  }
  input = input.toLowerCase();
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
  }
  else if ((computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")) {
    winner = " * Ouch! Computer wins.";
    computerScore++;
  }
  else {
    winner = ` * No winners here, ${computerSelection} does not beat ${playerSelection}.`;
    tieScore++;
  }
  console.log(winner);
  return winner;
}

// Play totalRounds number of rounds
function playGame() {
  for (let i = 0; i < totalRounds; i++) {
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

playGame();
calculateWinner();