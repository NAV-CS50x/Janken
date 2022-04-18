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


// Play a round player vs computer
function playRound(playerSelection, computerSelection) {

}

// Display player and computer selections in console
console.log(playerSelection, computerSelection);