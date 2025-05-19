let humanScore = 0;
let computerScore = 0;

function GetComputerChoice() {
    let choice = Math.random();
    if (choice < 0.33) {
        return 'rock';
    } else if (choice < 0.66){
        return 'paper';
    } else {
        return 'scissors';
    }
}

//console.log(GetComputerChoice());

function GetHumanChoice(){
    let choice = prompt("Choose rock, paper or scissors");
    choice = choice.toLowerCase();

    if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors'){
        return GetHumanChoice();
    }

    return choice;
}

//console.log(GetHumanChoice());

function PlayRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice){
        console.log("It's a tie!");
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log("You win!");
        humanScore++;
    } else {
        console.log("You lose!");
        computerScore++;
    }
}

//console.log(PlayRound());

function PlayGame(){
    for (let i = 0; i < 5; i++){
        let humanChoice = GetHumanChoice();
        let computerChoice = GetComputerChoice();
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        PlayRound(humanChoice, computerChoice);
    }
}