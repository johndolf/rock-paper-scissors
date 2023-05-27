let playerScore = 0;
let compScore = 0;
let gameArray = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
    //if random number equals 1 return ROCK
    //else if number is 2 return PAPER
    //else the number is 3 then return SCISSORS
    console.log(gameArray);
    return gameArray [Math.floor(Math.random() * gameArray.length)];
}

function playRound(playerSelection, computerSelection) {

    /*
    
    if player selects paper AND computer selects rock
        return message "you win Paper beats Rock!"
    else if the other way round return message "you lose Paper beats Rock!"

    if player selects paper AND computer selects scissors
        return message "you lose Scissors beats Paper!"
    else if the other way round return message "you win Scissors beats Paper!"

    if player selects rock AND computer selects paper
        return message "you lose Paper beats Rock!"
    else if the other way round return message "you win Paper beats Rock!"

    if player selects rock AND computer selects scissors
        return message "you win Rock beats Scissors!"
    else if the other way round return message "you lose Rock beats Scissors!"

    if player selects Scissors AND computer selects rock
        return message "you lose Rock beats Scissors!"
    else if the other way round return message "you win Rock beats Scissors!"

    if player selects Scissors AND computer selects paper
        return message "you win Scissors beats paper!"
    else if the other way round return message "you lose Scissors beats Paper!"

    */
    
    

    if (playerSelection == "paper" && computerSelection == "Rock") {
        playerScore++;
        console.log("you win Paper beats Rock!");
        
    }
    else if (playerSelection == "rock" && computerSelection == "Paper") {
        compScore++;
        console.log("you lose Paper beats Rock!");
        
    }
    else if (playerSelection == "paper" && computerSelection == "Scissors") {
        compScore++;
        console.log("you lose Scissors beats Paper!");
        
    }
    else if (playerSelection == "scissors" && computerSelection == "Paper") {
        playerScore++;
        console.log("you win Scissors beats Paper!");
        
    }    
    else if (playerSelection == "rock" && computerSelection == "Scissors") {
        playerScore++;
        console.log("you win Rock beats Scissors!");
       
    }
    else if (playerSelection == "scissors" && computerSelection == "Rock") {
        compScore++;
        console.log("you lose Rock beats Scissors!");
        
    }
    else if (playerSelection== "rock" && computerSelection =="Rock"){
        console.log("tie game!");        
    }
    else if (playerSelection== "paper" && computerSelection =="Paper"){
        console.log("tie game!");        
    }
    else if (playerSelection== "scissors" && computerSelection =="Scissors"){
        console.log("tie game!");        
    }

    



    /*if (playerSelection == "scissors" && computerSelection == "Rock")
        return console.log("you lose Rock beats Scissors!");
    else if (playerSelection == "rock" && computerSelection == "Scissors")
        return console.log("you win Rock beats Scissors!");*/

}
/*const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));*/
function game() {
    /*
    call playRound function
    player enters selection

    output result of each round
    record score of round
    game ends when 5 rounds have been played
    
    */
    /*let player = document.getElementById("my-button");
    player.addEventListener("click");*/


    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("ROCK, PAPER, or SCISSORS");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);

        console.log("score: Player: "+ playerScore);
        console.log("score: Computer: "+ compScore);

        if(playerScore==5){
            console.log("You Win!!");
        }
        else if(compScore==5){
            console.log("Computer Wins!!");
        }
        else game();
        
        /*if(player===true && getComputerChoice===false)
        {
            playerScore++;
            console.log("score: Player: "+ playerScore + " Computer " + compScore);
        }
        else
        {
            compScore++;
            console.log("score: Player: "+ playerScore + " Computer " + compScore);
        }*/
    }
}
game();