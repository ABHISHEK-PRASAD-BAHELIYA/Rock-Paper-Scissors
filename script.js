
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const getRandomChoice = Math.floor(Math.random() * choices.length);
    console.log(choices[getRandomChoice]);
}

function getHumanChoice() {
    const enterOwnChoice = prompt("rock, paper, scissors");
    console.log(enterOwnChoice);
}


