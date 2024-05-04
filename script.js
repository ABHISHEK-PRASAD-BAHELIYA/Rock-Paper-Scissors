
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const getRandomChoice = Math.floor(Math.random() * choices.length);
    console.log(choices[getRandomChoice]);
}

function getHumanChoice() {
    const enterOwnChoice = prompt("rock, paper, scissors");
    console.log(enterOwnChoice);
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playGround(humanChoice, computerChoice) {
        if(humanChoice === computerChoice) {
            alert(`you both choose ${humanChoice} so, it's a tie.`);
        } else if(
            (humanChoice === "rock" && computerChoice === "scissors")||
            (humanChoice === "paper" && computerChoice === "rock")||
            (humanChoice === "scissors" && computerChoice === "paper")
        ){
            alert(`you choose ${humanChoice}. computer choose ${computerChoice}. You win.`);
            humanScore++;
        } else {
            alert(`you choose ${humanChoice}. computer choose ${computerChoice}. You Loose`);
            computerChoice++;
        }
    }
}
