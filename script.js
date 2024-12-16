// HTML elements to update
const buttons = document.querySelectorAll('button');
const playerScoreElement = document.querySelector('.playerOneScore');
const computerScoreElement = document.querySelector('.playerTwoScore');
const playerResultElement = document.querySelector('.playerResult p');
const computerResultElement = document.querySelector('.computerResult p');
const roundWinnerElement = document.querySelector('.roundWinner p');

// Initialize game score
let playerScore = 0;
let computerScore = 0;

// Gets users choice
function getHumanChoice(callback) {
    buttons.forEach(button => {
        button.addEventListener("click", event => {
            let humanChoice;
            if (event.target.id === 'rockButton') {
                humanChoice = 'rock'
            } else if (event.target.id === 'paperButton') {
                humanChoice = 'paper'
            } else if (event.target.id === 'scissorsButton') {
                humanChoice = 'scissors'
            } else {
                humanChoice = 'ERROR'
            }

            callback(humanChoice);
        })
    })
}

// Gets random number
const randomNumber = () => number = Math.floor(Math.random() * (4 - 1)) + 1;

// Gets computers choice using random number
function getComputerChoice() {
    const number = randomNumber();
    let result;

    if (number === 1) {
        result = 'rock'
    } else if (number === 2) {
        result = 'paper'
    } else {
        result = 'scissors'
    }

    return result;
}

// Play 1 round and determine round winner
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'tie'
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'win';
    } else {
        return 'lose';
    }
}

// End game once a player reaches 5 points
function endGame(winner) {
    roundWinnerElement.textContent = `${winner} won the game!`;  // Updated line
    buttons.forEach(button => button.disabled = true); // **New line**: Disable buttons after game ends
}

// Update score and UI
function keepScore() {
    getHumanChoice(function (humanChoice) {
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

        if (result === 'win') {
            playerScore++;
        } else if (result === 'lose') {
            computerScore++;
        }

        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;
        playerResultElement.textContent = `You chose ${humanChoice}`;
        computerResultElement.textContent = `The computer chose ${computerChoice}`;

        if (result === 'tie') {
            roundWinnerElement.textContent = "It's a tie.";
        } else if (result === 'win') {
            roundWinnerElement.textContent = "You win this round!";
        } else {
            roundWinnerElement.textContent = "Computer wins this round.";
        }

        if (playerScore === 5) {
            endGame("You");
        } else if (computerScore === 5) {
            endGame("The computer")
        }
    });
}

keepScore();