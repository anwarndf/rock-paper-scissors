// Generate and return random input
function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"]; // choices

  // generate random by lentgh of choice array
  let randomNum = Math.floor(Math.random() * choice.length);
  return choice[randomNum];
}

// Prompt user for input and return
function playerSelection() {
  let userChoice = prompt("choose between rock, paper and scissors", "");
  return userChoice.toLowerCase();
}

// Game logic
function playRound(computerSelection, playerSelection) {
  // choose winner
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return true;
  }

  return false;
}

// Game function that keeps playing round until certain point
function game() {
  let result;
  let userWin = 0;
  let computerWin = 0;
  let tie = 0;

  // Playing 5 rounds
  for (i = 0; i < 5; i++) {
    result = playRound(getComputerChoice(), playerSelection());

    // keep updating the wins, loses and ties
    if (result === "tie") {
      tie += 1;
    } else if (result) {
      userWin += 1;
    } else {
      computerWin += 1;
    }
  }

  console.log(`User : ${userWin}\nPC: ${computerWin}\nTie : ${tie}`);

  if (userWin > computerWin) {
    console.log(`User wins with ${userWin} winning out of 5 rounds`);
  } else if (computerWin > userWin) {
    console.log(`Computer wins with ${computerWin} winning out of 5 rounds`);
  } else {
    console.log(`It was a tie`);
  }
}

game();
