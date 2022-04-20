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
  console.log(winner);
  return winner;
}

//Set
let totalRounds = 5;

function game() {
  for (let i = 0; i < totalRounds; i++) {
    playRound();
  }
}

game();
