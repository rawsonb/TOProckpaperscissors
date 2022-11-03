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

function playRound(playerChoice) {
    computerChoice = getComputerChoice()
    if( playerChoice == computerChoice){
        return "tie";
    }
    if(playerChoice == "rock"){
        if(computerChoice == "paper"){
            return "lose";
        } else {
            return "win";
        }
    }
    if(playerChoice == "scissors"){
        if(computerChoice == "paper"){
            return "win";
        } else {
            return "lose";
        }
    }
}

// min inclusive, max non-inclusive
function randInt(min, max) { 
    return Math.floor(Math.random() * (max-min) + min);
}

function adjustScore(result){
    docItems.popSound.play();
    if(result == "win"){
        scoreBoard.playerScore++;
        docItems.player.textContent = scoreBoard.playerScore;
        if(scoreBoard.playerScore >= 5){
            scoreBoard.playerScore = 0;
            docItems.player.textContent = scoreBoard.playerScore;
            scoreBoard.computerScore = 0;
            docItems.computer.textContent = scoreBoard.computerScore;
            docItems.info.textContent = "YOU WON THE GAME!";
        } else {
            docItems.info.textContent = "win";
        }
    } else if(result == "tie"){
        scoreBoard.computerScore++;
        docItems.computer.textContent = scoreBoard.computerScore;
        if(scoreBoard.computerScore >= 5){
            scoreBoard.playerScore = 0;
            docItems.player.textContent = scoreBoard.playerScore;
            scoreBoard.computerScore = 0;
            docItems.computer.textContent = scoreBoard.computerScore;
            docItems.info.textContent = "YOU LOST THE GAME!";
        } else {
            docItems.info.textContent = "lose";
        }
    } else{
        docItems.info.textContent = "tie";
    }
}

const docItems = {
    info: document.querySelector(".info"),
    player: document.querySelector(".score .player"),
    computer: document.querySelector(".score .computer"),
    rockButton: document.querySelector(".rock-button"),
    scissorsButton: document.querySelector(".scissors-button"),
    paperButton: document.querySelector(".paper-button"),
    popSound: document.getElementById("pop"),
}

let scoreBoard = {
    playerScore: 0,
    computerScore: 0,
}

docItems.rockButton.addEventListener('click', () => {
    adjustScore(playRound("rock"));
});

docItems.paperButton.addEventListener('click', () => {
    adjustScore(playRound("paper"));
});

docItems.scissorsButton.addEventListener('click', () => {
    adjustScore(playRound("scissors"));
});

docItems.info.textContent = "Click a button to start.";