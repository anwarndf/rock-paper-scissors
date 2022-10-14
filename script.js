// Randomly generate a value for pc
function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * choice.length);
  return choice[randomNum];
}

// Get user input
function playerChoice() {
  let userChoice = prompt("Choose you're weapon (rock, paper or scissors)", "");
  return userChoice.toLowerCase();
}

// head to head compare the values
function playRound(computerSelection, playerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return true;
  }

  return false; // false if player loses the battle
}

// Looping the game for 5 straight rounds
function startGame() {
  let result;
  let userWins,
    computerWins,
    ties = 0;

  // Loop for 5 rounds
  for (i = 0; i < 5; i++) {
    // get the values from playround function
    result = playRound(getComputerChoice(), playerChoice());

    // Update wins, loses, ties
    if (result === "tie") {
      ties += 1;
    } else if (result) {
      userWins += 1;
    } else {
      computerWins += 1;
    }
  }

  console.log(`User : ${userWins}\nPC: ${computerWins}\nTie : ${ties}`);

  // Evaluate who won the round
  if (userWins > computerWins) {
    console.log(`User wins with ${userWins} winning out of 5 rounds`);
  } else if (computerWins > userWins) {
    console.log(`Computer wins with ${computerWins} winning out of 5 rounds`);
  } else {
    console.log(`It was a tie`);
  }
}

startGame();
