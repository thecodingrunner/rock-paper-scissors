// Create a function that returns one of rock, paper, or scissors at random
function computerSelection() {
    let choices = ['rock','paper','scissors']
    return choices[Math.floor(Math.random() * choices.length)]
};

let computerScore = 0;
let playerScore = 0;

/* Create a function that compares the user inputted choice and the computer selection, 
and provides a message*/
function playRound(player, computer) {
    if (player === computer) {
        div.textContent = `Draw! Please play again`;
    } else if ((player === 'scissors' && computer === 'rock') 
    || (player === 'paper' && computer === 'scissors')
    || (player === 'rock' && computer === 'paper')) {
        div.textContent = `You lose! ${computer} beats ${player}.`;
        computerScore ++;
    } else {
        div.textContent = `You win! ${player} beats ${computer}.`;
        playerScore ++;
    };
    displayScore()
};

function displayScore() {
  if ((playerScore < 5) && (computerScore < 5)) {
    div2.textContent = `${playerScore} : ${computerScore}`;
  } else if (playerScore >= 5 || computerScore < 5) {
      div2.textContent = `You win!`;
  } else if (playerScore < 5 || computerScore >= 5) {
      div2.textContent = 'You lose!';
  }
}


// Reference buttons and div in the html document
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const div = document.querySelector('.result');
const div2 = document.querySelector('.scoreboard')

// Add event listeners, play a round when each button is clicked with the relevant value
rockButton.addEventListener('click', () => {playRound('rock', computerSelection())});
paperButton.addEventListener('click', () => {playRound('paper', computerSelection())});
scissorsButton.addEventListener('click', () => {playRound('scissors', computerSelection())});

/* Create a game function that asks for user input, runs the game 5 times, returns a score each
time, and tells the player who won at the end*/
/* function game() {
    playRound(playerSelection,computerSelection());
    console.log(`Your Score: ${scorePlayer} \nComputer Score: ${scoreComputer}`);
    if (scorePlayer>scoreComputer) {
        console.log(`You won!`)
    } else if (scorePlayer<scoreComputer) {
        console.log(`You lost.`)
    } else {
        console.log(`You drew.`)
    };
}; */
