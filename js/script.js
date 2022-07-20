const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const playAgain = document.querySelector(".page__results-restart");

rock.addEventListener("click", function () 
{
  playRound(this.id);
});
scissors.addEventListener("click", function () 
{
  playRound(this.id);
});
paper.addEventListener("click", function () 
{
  playRound(this.id);
});
playAgain.addEventListener("click", function () 
{
  toggleSections();
});
function playRound(playersMove) 
{
  const randomMove = computersMove();
  toggleSections();
  displayMoves(playersMove, randomMove);
  displayResult(playersMove, randomMove);
}
function computersMove() 
{
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) return "rock";
  else if (randomNumber === 2) return "scissors";
  else if (randomNumber === 3) return "paper";
}
function displayMoves(playersMove, computersMove) 
{
  const playersMoveDiv = document.querySelector("#players-move");
  const computersMoveDiv = document.querySelector("#computers-move");
  playersMoveDiv.innerHTML = `<span class="far fa-hand-${playersMove}"></span>`;
  computersMoveDiv.innerHTML = `<span class="far fa-hand-${computersMove}"></span>`;
}
function displayResult(playersMove, computersMove) 
{
  const resultDiv = document.querySelector("#result");
  const computerMove = Math.floor(Math.random() * 3 + 1);
  const playerMove = Math.floor(Math.random() * 3 + 1);
  
  if (playerMove === computerMove) 
  {
    resultDiv.innerHTML = ("Draw "+playerMove +" : "  +computerMove);
  } 
  else if 
  (
    (playerMove === "paper" && playerMove === "scissors") ||
    (playerMove === "rock" && playerMove === "paper") ||
    (playerMove === "scissors" && playerMove === "rock")
  ) 
  {
    resultDiv.innerHTML = ("You win " +playerMove +" : " +computerMove);
  } 
  else 
  {
    resultDiv.innerHTML = ("You lose " +playerMove +":"  +computerMove);
  }
}
function toggleSections() 
{
  const pageMovesDOM = document.querySelector(".page__moves");
  const pageResultsDOM = document.querySelector(".page__results");
  pageMovesDOM.classList.toggle("none");
  pageResultsDOM.classList.toggle("none");
}
