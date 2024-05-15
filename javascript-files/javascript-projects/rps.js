console.log("hello")

//used Math.random()
//prompt(message, defaultValue), both args optional, used to get user input
//make sure human/computerScore variables declared outside as they are not passed in
//Will be out of scope otherwise

function getComputerChoice() {
    let rand = Math.random();// make sure to have parenthesis, otherwise just 0
    rand = 3*rand;
    if (rand > 2) {
        return "rock"
    }
    else if (rand > 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function getHumanChoice() {
    let input = prompt("input choice");
    return input;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock") {
        if (computerChoice  == "rock") {
            console.log("tie, rock")
        }
        else if (computerChoice  == "paper") {
            console.log("lose, paper")
            computerScore++;
        }
        else {
            console.log("win, scissors")
            humanScore++;
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice  == "rock") {
            console.log("win, rock")
            humanScore++;
        }
        else if (computerChoice  == "paper") {
            console.log("tie, paper")
        }
        else {
            console.log("lose, scissors")
            computerScore++;
        }
    }
    else {
        if (computerChoice  == "rock") {
            console.log("lose, rock")
            computerScore++;
        }
        else if (computerChoice  == "paper") {
            console.log("win, paper")
            humanScore++;
        }
        else {
            console.log("tie, scissors")
        }
    }
}

function playGame() {
    for (let i=0; i<5; i++) {
        playRound(getHumanChoice(),getComputerChoice());
    }
    console.log(humanScore);
    console.log(computerScore);
}


playGame();
