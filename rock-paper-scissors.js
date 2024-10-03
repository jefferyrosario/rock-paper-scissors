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
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

// Take input from user that is rock, paper or scissors
function getHumanChoice() {
  //  let humanChoice = prompt("Choose one: rock, paper, scissors");

    return humanChoice;
}

// Create a function that plays one round


// Add Event Handler that call the playRound function with the correct playerSelection
const btn = document.querySelectorAll('.btn')
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const roundResult = document.querySelector('.roundResult')


const computerScore = document.querySelector('.computerScore')
const humanScore = document.querySelector('.humanScore')
const finalResult = document.querySelector('.finalResult')
function incrementScore(score){
    let actualScore = 0;
    actualScore = score.textContent
    actualScore += 1;
    computerScore.textContent = actualScore
  //  return actualScore;
}

btn.forEach((button) => {
    let computerChoice = "";
    let buttonSelected = "";
    button.addEventListener("click", () => {
        finalResult.textContent = ""
        buttonSelected = button.textContent
        playRound(getComputerChoice(), buttonSelected)
        
      //  computerScore.textContent = computerScore
     //   humanScore.textContent = humanScore

        if(parseInt(computerScore.textContent) == 5){
            finalResult.textContent = "You lose the game! Game Over!"
            resetGame()
        } else if (parseInt(humanScore.textContent) == 5){
            finalResult.textContent = "You win the game!"
            resetGame()
        }
    })
})

function resetGame(){
    computerScore.textContent = 0;
    humanScore.textContent = 0;

}

function playRound(computerChoice, humanChoice) {
    let score;
    switch (true) {
        case computerChoice == "scissors" && humanChoice == "scissors":
            roundResult.textContent = "Tie!"
            break;
        case computerChoice == "scissors" && humanChoice == "paper":
            computerScore.textContent = parseInt(computerScore.textContent) + 1
           // incrementScore(computerScore)
            roundResult.textContent = "You lose! Scissors beats paper!"
            break;
        case computerChoice == "scissors" && humanChoice == "rock":
            humanChoice.textContent = parseInt(humanScore.textContent) + 1
            roundResult.textContent = "You win! Rock beats scissors!"
            break;
        case computerChoice == "paper" && humanChoice == "paper":
            roundResult.textContent = "Tie!" 
            break;
        case computerChoice == "paper" && humanChoice == "rock":
            roundResult.textContent = "You win! Rock beats paper!"
            computerScore.textContent = parseInt(computerScore.textContent) + 1;
            break;
        case computerChoice == "paper" && humanChoice == "scissors":
            humanScore.textContent = parseInt(humanScore.textContent) + 1;
            roundResult.textContent = "You win! Scissors beats paper!"
            break;
        case computerChoice == "rock" && humanChoice == "rock":
            roundResult.textContent = "Tie!"
            break;
        case computerChoice == "rock" && humanChoice == "paper":
            humanScore.textContent = parseInt(humanScore.textContent) + 1;
            roundResult.textContent = "You win! Paper beats rock!"
            break;
        case computerChoice == "rock" && humanChoice == "scissors":
            computerScore.textContent = parseInt(computerScore.textContent) + 1;
            roundResult.textContent = "You lose! Rock beats scissors!" 
    }
}




// Declare a variable to keep score of user
//let humanScore = 0;
// Declare a variable to keep score of computer
//let computerScore = 0;

function playGame(computerChoice, humanChoice) {
    if(humanScore == 5 || computerScore == 5){
        
        humanScore = 0
        computerScore = 0
    }
}

playGame()

//playRound(getComputerChoice(), getHumanChoice())