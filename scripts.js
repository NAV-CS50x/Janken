// Define options of rock, paper, scissors
const selection = ["rock", "paper", "scissors"];

// Get random selection from options
function computerPlay() {
  let result = selection[Math.floor(Math.random() * selection.length)];
  console.log("Computer chooses " + result);
  return result;
}

// Get valid selection from player
function playerPlay() {
  let input = prompt("Choose rock, paper, or scissors!");
  while (!selection.includes(input.toLowerCase())) {
    alert("Please enter a valid answer.")
    input = prompt("Choose rock, paper, or scissors!")
  }
  input = input.toLowerCase();
  console.log("Player chooses " + input);
  return input;
}

// Play a round player vs computer
function playRound() {
  let playerSelection = playerPlay();
  let computerSelection = computerPlay();
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

//Set
let totalRounds = 5;
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let gameWinner = "";

function game() {
  for (let i = 0; i < totalRounds; i++) {
    playRound();
    console.log(playerScore, computerScore, tieScore);
  }
}

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

game();
calculateWinner();
