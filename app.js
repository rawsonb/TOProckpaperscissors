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
    playerChoice = prompt("rock, paper, or scissors?").toLowerCase();
    console.log(`your choice: ${playerChoice}`)
    computerChoice = getComputerChoice()
    console.log(`computer's choice: ${computerChoice}`);
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

function game(){
    console.log("welcome to rock paper scissors!");
    let score = 0;
    let round;
    for (let i = 0; i < 5; i++){
        round = playRound()
        console.log(round);
        if(round == "win"){
            score++
        } else if(round == "lose"){
            score--
        }
    }
    if (score > 0){
        console.log("YOU ARE THE FINAL WINNER")
    } else if(score < 0){
        console.log("YOU ARE A GIANT LOSER")
    } else {
        console.log("GAME TIED")
    }
}

// min inclusive, max non-inclusive
function randInt(min, max) { 
    return Math.floor(Math.random() * (max-min) + min);
}

game();