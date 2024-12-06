function getComputerChoice() {
    const computerChoice = Math.random();

    if (computerChoice <= 0.33) {
        result = 'rock';
    } else if (computerChoice > 0.33 && computerChoice <= 0.66) {
        result = 'paper';
    } else {
        result = 'scissors';
    }

    return result;
}

function getHumanChoice() {
    const humanChoice = prompt('Enter "Rock", "Paper", or "Scissors" to start the game:');

    if (humanChoice.toLowerCase() == 'rock') {
        result = 'rock';
    } else if (humanChoice.toLowerCase() == 'paper') {
        result = 'paper';
    } else {
        result = 'scissors'
    }

    return result;
}

let humanScore = 0;
let computerScore = 0;

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

function playRound(computerChoice, humanChoice) {
    if (computerChoice = 'rock') {
        if (humanChoice = 'paper') {
            result = 'You win!'
        } else if (humanChoice = 'scissors') {
            result = 'You lose.'
        }
        else {
            result = 'Tie.'
        }
    } else if (computerChoice = 'paper') {
        if (humanChoice = 'scissors') {
            result = 'You win!'
        } else if (humanChoice = 'rock') {
            result = 'You lose.'
        }
        else {
            result = 'Tie.'
        }
    } else if (computerChoice = 'scissors') {
        if (humanChoice = 'rock') {
            result = 'You win!'
        } else if (humanChoice = 'paper') {
            result = 'You lose.'
        } else {
            result = 'Tie.'
        }
    }

    return result;
}

playRound();

console.log(`The computer chose ${computerChoice}`);
console.log(`You chose ${humanChoice}`);
console.log(playRound());