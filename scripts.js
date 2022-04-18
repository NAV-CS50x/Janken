let options = ["rock", "paper", "scissors"];
let computerSelection = computerPlay();

function computerPlay() {
  let result = options[Math.floor(Math.random() * options.length)];
  return result;
}

let playerSelection = playerPlay();

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

function playRound(playerSelection, computerSelection) {

}

console.log(playerSelection, computerSelection);