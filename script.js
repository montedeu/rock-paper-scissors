let humanScore = 0;
let computerScore = 0;
let winConditions = [["rock", "scissors"],
                    ["paper", "rock"],
                    ["scissors", "paper"]]

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random()*choices.length)]
    return choice;
}

function getHumanChoice() {
    let userChoice = prompt("Choose rock, paper, or scissors (type 'quit' if you want to stop playing): ");
    return userChoice;
}

function checkWinCondition(choice1, choice2) {
    for (let i = 0; i < winConditions.length; i++) {
        if (winConditions[i][0] == choice1 && winConditions[i][1] == choice2) {
            return true;
        }
    }
    return false;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        console.log(`It's a tie! Both of you chose ${humanChoice}`);
    }
    else if (checkWinCondition(humanChoice, computerChoice)) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    }
    else if (checkWinCondition(computerChoice, humanChoice)) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else  {
        console.log("Something went wrong please try again.");
    }
    console.log(`Score(human, computer): ${humanScore}, ${computerScore}`)
}
while (true) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    if (humanSelection == 'quit') {
        break;
    }

    playRound(humanSelection, computerSelection);
}