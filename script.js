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
        result = 'Invalid';
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

// Determines a round winner based on both the human and computer choices
function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        return 'tie';
    }

    if (
        (computerChoice === 'rock' && humanChoice === 'scissors') || (computerChoice === 'paper' && humanChoice === 'rock') || (computerChoice === 'scissors' && humanChoice === 'paper')
    ) {
        return 'lose';
    }

    return 'win';
}

const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorsButton = document.querySelector(".scissors")

rockButton.addEventListener("click", () => {
    console.log("You chose rock.")
})

paperButton.addEventListener("click", () => {
    console.log("You chose paper.")
})

scissorsButton.addEventListener("click", () => {
    console.log("You chose scissors.")
})

// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;

//     for (let round = 1; round <= 5; round++) {
//         const humanChoice = getHumanChoice();
//         if (humanChoice === 'Invalid') {
//             console.log('Invalid choice. Round skipped');
//             continue;
//         }

//         const computerChoice = getComputerChoice();
//         console.log(`You chose ${humanChoice}`);
//         console.log(`The computer chose ${computerChoice}`);

//         const result = playRound(computerChoice, humanChoice);

//         if (result === 'win') {
//             console.log('You win this round!');
//             humanScore++;
//         } else if (result === 'lose') {
//             console.log('You lose this round.');
//             computerScore++;
//         } else {
//             console.log('This round is a tie.');
//         }
//     }

//     console.log('Game over!');
//     console.log(`Final Scores: You = ${humanScore}, Computer - ${computerScore}`);
//     if (humanScore > computerScore) {
//         console.log('Congratulations! You are the winner!');
//     } else if (humanScore < computerScore) {
//         console.log('The computer wins! Better luck next time');
//     } else {
//         console.log("It's a tie. Everyone's a winner!");
//     }
// }

// playGame();