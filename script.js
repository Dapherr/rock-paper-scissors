// Returns user's choice of rock, paper, or scissors
function getHumanChoice() {
    const humanChoice = prompt('Enter "Rock", "Paper", or "Scissors" to start the game:')
    let result;

    if (humanChoice.toLowerCase() === 'rock') {
        result = 'rock'
    } else if (humanChoice.toLowerCase() === 'paper') {
        result = 'paper'
    } else if (humanChoice.toLowerCase() === 'scissors') {
        result = 'scissors'
    } else {
        result = 'Invalid'
    }

    return result;
}

// Returns rock, paper, or scissors at random
function getComputerChoice() {
    const computerChoice = Math.random();
    let result;

    if (computerChoice <= 0.33) {
        result = 'rock'
    } else if (computerChoice > 0.33 && computerChoice <= 0.66) {
        result = 'paper'
    } else {
        result = 'scissors'
    }

    return result;
}

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

// Determines a round winner based on both the human and computer choices
function playRound(computerChoice, humanChoice) {
    let result;

    if ((computerChoice === 'rock') && (humanChoice === 'paper')) {
        result = 'You win!'
    } else if ((computerChoice === 'paper') && (humanChoice === 'scissors')) {
        result = 'You win!'
    } else if ((computerChoice === 'scissors') && (humanChoice === 'rock')) {
        result = 'You win!'
    } else if ((computerChoice === 'rock') && (humanChoice === 'scissors')) {
        result = 'You lose.'
    } else if ((computerChoice === 'paper') && (humanChoice === 'rock')) {
        result = 'You lose.'
    } else if ((computerChoice === 'scissors') && (humanChoice === 'paper')) {
        result = 'You lose.'
    } else {
        result = 'Tie.'
    }

    return result;
}

console.log(`You chose ${humanChoice}`)
console.log(`The computer chose ${computerChoice}`)
console.log(playRound(computerChoice, humanChoice))

// let humanScore = 0;
// let computerScore = 0;