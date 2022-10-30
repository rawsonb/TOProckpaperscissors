function getComputerChoice() {
    let selection = randInt(1,4);
    if (selection == 1){
        return "rock";
    }
    if (selection == 2){
        return "paper";
    }
    if (selection == 3){
        return "scissors";
    }
}

function playRound() {
    console.log("welcome to rock paper scissors!");
    playerChoice = prompt("rock, paper, or scissors?").toLowerCase();
    console.log(`computer's choice: ${getComputerChoice()}`);
}

// min inclusive, max non-inclusive
function randInt(min, max) { 
    return Math.floor(Math.random() * (max-min) + min);
}

console.log(getComputerChoice());