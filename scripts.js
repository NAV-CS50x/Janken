// Define options of rock, paper, scissors
const options = ["rock", "paper", "scissors"];

// Set
let computerSelection = computerPlay();

// Get random selection from options
function computerPlay() {
  let result = options[Math.floor(Math.random() * options.length)];
  return result;
}

// Set
let playerSelection = playerPlay();

// Get valid selection from player
function playerPlay() {
  while (true) {
    let result = prompt("Choose rock, paper, or scissors!");
    if (options.includes(result.toLowerCase())) {
      break;
    }
    alert("Please enter a valid answer.")
  }
  return result.toLowerCase();
}

// Play a round player vs computer
function playRound(playerSelection, computerSelection) {

}

// Display player and computer selections in console
console.log(playerSelection, computerSelection);