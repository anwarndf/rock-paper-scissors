const btnrock = document.querySelector(".btn-rock");
const btnpaper = document.querySelector(".btn-paper");
const btnscissors = document.querySelector(".btn-scissors");
const winalert = document.querySelector(".win-alert");
const userPointUpdate = document.querySelector(".updateUserPoint");
const pcPointUpdate = document.querySelector(".updatePcPoint");
const playAgain = document.querySelector(".disabled");
const playAgainbtn = document.querySelector(".play-again");

// Listen user inputs
btnrock.addEventListener("click", () => choices("rock"));
btnpaper.addEventListener("click", () => choices("paper"));
btnscissors.addEventListener("click", () => choices("scissors"));

//
function choices(user) {
  // Randomly generate pc choice
  let choices = ["rock", "paper", "scissors"];
  let pcChoice = choices[Math.floor(Math.random() * choices.length)];
  let userChoice = user;

  return playRound(pcChoice, userChoice);
}
// Keep tracking scores
let userwin = 0;
let pcwin = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    winalert.textContent = "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    userwin += 1;
    console.log(userwin);
    userPointUpdate.textContent = userwin;
    winalert.textContent = `You win, (${playerSelection} beats ${computerSelection})`;
  } else {
    pcwin += 1;
    pcPointUpdate.textContent = pcwin;
    winalert.textContent = `You lose, (${computerSelection} beats ${playerSelection})`;
  }

  if (userwin === 5 || pcwin === 5) {
    playAgain.style.display = "block";

    playAgainbtn.addEventListener("click", () => {
      location.reload();
    });
  }
}
