let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result >p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');
function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function toWord(letter) {
  if (letter == 'r') return 'Rock';
  if (letter == 'p') return 'Paper';
  else return 'Scissor';
}
function win(user, computer) {
  const smallUserWord = 'user'.fontsize(3).sup();
  const smallComputerWord = 'computer'.fontsize(3).sup();
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const user_div = document.getElementById(user);
  result_div.innerHTML = `${toWord(user)} ${smallUserWord}   beats  ${toWord(
    computer
  )}  ${smallComputerWord} . you win 🔥 `;
  user_div.classList.add('green-glow');
  setTimeout(() => user_div.classList.remove('green-glow'), 3000);
}
function lose(user, computer) {
  const smallUserWord = 'user'.fontsize(3).sup();
  const smallComputerWord = 'computer'.fontsize(3).sup();
  const user_div = document.getElementById(user);

  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${toWord(
    user
  )} ${smallUserWord}   beats computer   ${toWord(
    computer
  )}  ${smallComputerWord}  you lost 😢`;
  user_div.classList.add('red-glow');
  setTimeout(() => user_div.classList.remove('red-glow'), 3000);
}

function draw(user, computer) {
  const user_div = document.getElementById(user);
  const smallUserWord = 'user'.fontsize(3).sup();
  const smallComputerWord = 'computer'.fontsize(3).sup();
  result_div.innerHTML = `${toWord(user)} ${smallUserWord}   equals   ${toWord(
    computer
  )}  ${smallComputerWord}  it is a draw! 😢`;
  user_div.classList.add('gray-glow');
  setTimeout(() => user_div.classList.remove('gray-glow'), 3000);
}
function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sp':
      lose(userChoice, computerChoice);
      break;
    case 'rr':
    case 'ss':
    case 'pp':
      draw(userChoice, computerChoice);
      break;
  }
}
getComputerChoice();

function main() {
  rock_div.addEventListener('click', function () {
    game('r');
  });

  paper_div.addEventListener('click', function () {
    game('p');
  });

  scissor_div.addEventListener('click', function () {
    game('s');
  });
}
main();
