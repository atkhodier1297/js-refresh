let wins = 0;
let losses = 0;
let ties = 0;

function playGame(playerChoice) {
  // Generate a random choice for the computer
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Determine the winner
  let result;
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
    ties++;
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You win!";
    wins++;
  } else {
    result = "You lose! Try again.";
    losses++;
  }

  // Display the result and update scores
  const resultElement = document.getElementById('result');
  resultElement.textContent = `Computer chose ${computerChoice}. ${result}`;

  const winsElement = document.getElementById('wins');
  const lossesElement = document.getElementById('losses');
  const tiesElement = document.getElementById('ties');

  winsElement.textContent = wins;
  lossesElement.textContent = losses;
  tiesElement.textContent = ties;
}

  
