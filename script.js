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


let computerSelection = getComputerChoice();
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
rock.addEventListener('click', () => {
    playRound('rock', computerSelection);
    results = `Score(human, computer): ${humanScore}, ${computerScore}`;
    div.textContent = results;
});
paper.addEventListener('click', () => {
    playRound('paper', computerSelection);
    results = `Score(human, computer): ${humanScore}, ${computerScore}`;
    div.textContent = results;
});
scissors.addEventListener('click',() => {
    playRound('scissors', computerSelection);
    results = `Score(human, computer): ${humanScore}, ${computerScore}`;
    div.textContent = results;
});

const choices_div = document.getElementById('choices');
const div = document.createElement("div");
div.setAttribute('id', 'results');
choices_div.appendChild(div);
results = `Score(human, computer): ${humanScore}, ${computerScore}`;
div.textContent = results;