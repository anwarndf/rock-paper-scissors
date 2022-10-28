const btnrock = document.querySelector(".btn-rock");
const btnpaper = document.querySelector(".btn-paper");
const btnscissors = document.querySelector(".btn-scissors");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const userPoints = document.querySelector(".user");
const pcPoints = document.querySelector(".pc");
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
    p2.textContent = "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    userwin += 1;
    console.log(userwin);
    userPoints.textContent = userwin;
    p2.textContent = `You win, (${playerSelection} beats ${computerSelection})`;
  } else {
    pcwin += 1;
    pcPoints.textContent = pcwin;
    p2.textContent = `You lose, (${computerSelection} beats ${playerSelection})`;
  }

  if (userwin === 5 || pcwin === 5) {
    p1.textContent = "Do you want to play again?";
    p2.innerHTML = "<button class='again'>yes</button>";
    const againbtn = document.querySelector(".again");

    againbtn.addEventListener("click", () => {
      location.reload();
    });
  }
}
