var options = ["rock", "paper", "scissors"];

function computerPlay() {
  result = options[Math.floor(Math.random() * options.length)];
  return result;
}

var playerSelection = prompt("Choose rock, paper, or scissors!");
var computerSelection = computerPlay();

console.log(playerSelection.toLowerCase(), computerSelection);