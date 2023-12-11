function playGame(playerChoice) {
    // Generate a random choice for the computer
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    // Determine the winner
    let result;
    if (playerChoice === computerChoice) {
      result = "It's a tie!";
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = "You win!";
    } else {
      result = "You lose! Try again.";
    }
  
    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Computer chose ${computerChoice}. ${result}`;
  }
  
