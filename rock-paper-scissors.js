// This game is rock paper scissors. 

function getComputerChoice() {

    // Make a selection for the computer that is rock, paper, or scissors
    const randomInt = Math.round(Math.random() * (2 - 0) + 0);
    let computerChoice;
    switch (randomInt) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissor";
            break;
    }
    return computerChoice;
}

// Take input from user that is rock, paper or scissors
function getHumanChoice() {
    let humanChoice = prompt("Choose one: rock, paper, scissors");
    return humanChoice;
}

// Create a function that plays one round
function playRound(computerChoice, humanChoice) {

    let score;
    switch (true) {
        case computerChoice == "scissor" && humanChoice == "scissor":
            console.log("Tie!")
            break;
        case computerChoice == "scissor" && humanChoice == "paper":
            computerScore += 1
            console.log("You lose! Scissors beats paper!")
            break;
        case computerChoice == "scissor" && humanChoice == "rock":
            humanChoice += 1
            console.log("You win! Rock beats scissors!")
            break;
        case computerChoice == "paper" && humanChoice == "paper":
            console.log("Tie!")
            break;
        case computerChoice == "paper" && humanChoice == "rock":
            console.log("You win! Rock beats paper!")
            computerScore += 1;
            break;
        case computerChoice == "paper" && humanChoice == "scissors":
            humanScore += 1;
            console.log("You win! Scissors beats paper!")
            break;
        case computerChoice == "rock" && humanChoice == "rock":
            console.log("Tie!")
            break;
        case computerChoice == "rock" && humanChoice == "paper":
            humanScore += 1;
            console.log("You win! Paper beats rock!")
            break;
        case computerChoice == "rock" && humanChoice == "scissor":
            computerScore += 1;
            console.log("You lose! Rock beats scissors!")
    }
}

// Add Event Handler that call the playRound function with the correct playerSelection
const btn = document.querySelectorAll('#btn')
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

btn.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(getComputerChoice(),)
    })
})

function playRound() {
    let score;
    switch (true) {
        case computerChoice == "scissor" && humanChoice == "scissor":
            console.log("Tie!")
            break;
        case computerChoice == "scissor" && humanChoice == "paper":
            computerScore += 1
            console.log("You lose! Scissors beats paper!")
            break;
        case computerChoice == "scissor" && humanChoice == "rock":
            humanChoice += 1
            console.log("You win! Rock beats scissors!")
            break;
        case computerChoice == "paper" && humanChoice == "paper":
            console.log("Tie!")
            break;
        case computerChoice == "paper" && humanChoice == "rock":
            console.log("You win! Rock beats paper!")
            computerScore += 1;
            break;
        case computerChoice == "paper" && humanChoice == "scissors":
            humanScore += 1;
            console.log("You win! Scissors beats paper!")
            break;
        case computerChoice == "rock" && humanChoice == "rock":
            console.log("Tie!")
            break;
        case computerChoice == "rock" && humanChoice == "paper":
            humanScore += 1;
            console.log("You win! Paper beats rock!")
            break;
        case computerChoice == "rock" && humanChoice == "scissor":
            computerScore += 1;
            console.log("You lose! Rock beats scissors!")
    }
}

// Create a function that plays the entire game



console.log(getComputerChoice())

// Declare a variable to keep score of user
let humanScore = 0;
// Declare a variable to keep score of computer
let computerScore = 0;

playGame()

//playRound(getComputerChoice(), getHumanChoice())