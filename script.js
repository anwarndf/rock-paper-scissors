// getting computer input
function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"]; // choices

  // generate random by lentgh of choice array
  let randomNum = Math.floor(Math.random() * choice.length);
  return choice[randomNum]; // parsing the randum number to choice
}

// getting users input
function playerSelection() {
  let userChoice = prompt("choose between rock, paper and scissors", "");
  return userChoice.toLowerCase();
}

// compare computer and users value
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
  } else {
    return false;
  }
}

// playround function that keeps playing untill certain number is reached
function game() {
  let result;
  let userWin = 0;
  let computerWin = 0;
  let tie = 0;

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
  } else {
    console.log(`Computer wins with ${computerWin} winning out of 5 rounds`);
  }
}

game();
