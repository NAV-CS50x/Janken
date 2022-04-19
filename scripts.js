// Define options of rock, paper, scissors
const selection = ["rock", "paper", "scissors"];

// Set
let computerSelection = computerPlay();

// Get random selection from options
function computerPlay() {
  let result = selection[Math.floor(Math.random() * selection.length)];
  return result;
}

// Set
let playerSelection = playerPlay();

// Get valid selection from player
function playerPlay() {
  let input = prompt("Choose rock, paper, or scissors!");
  while (!selection.includes(input.toLowerCase())) {
    alert("Please enter a valid answer.")
    input = prompt("Choose rock, paper, or scissors!")
  }
  input = input.toLowerCase();
  return input;
}

// Set
let roundWinner = playRound();

// Play a round player vs computer
function playRound() {
  let winner;
  if ((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")) {
    winner = "Player wins.";
  }
  else if ((computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")) {
    winner = "Ouch! Computer wins.";
  }
  else {
    winner = `No winners here, ${computerSelection} does not beat ${playerSelection}.`;
  }
  return winner;
}

// Display player and computer selections in console
console.log("Player chooses " + playerSelection);
console.log("Computer chooses " + computerSelection);

// Display round winner in console
console.log(roundWinner);