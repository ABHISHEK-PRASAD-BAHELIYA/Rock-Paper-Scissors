let showRound = document.querySelector('.round');
 showRound



// function getComputerChoice() {
//     const choices = ["rock", "paper", "scissors"];
//     const getRandomChoice = Math.floor(Math.random() * choices.length);
//     return choices[getRandomChoice];
// }

// function getHumanChoice() {
//     const inputChoice = prompt("Enter your choice : rock, paper, scissors");
//     console.log(inputChoice);
//     return inputChoice;
// }

// function playGame() {
//     // Declare the player score variables
//     let humanScore = 0;
//     let computerScore = 0;

//     function playRound(humanChoice, computerChoice) {
//         if(humanChoice === computerChoice) {
//             alert(`you both choose ${humanChoice} so, it's a tie.`);
//         } else if(
//             (humanChoice === "rock" && computerChoice === "scissors")||
//             (humanChoice === "paper" && computerChoice === "rock")||
//             (humanChoice === "scissors" && computerChoice === "paper")
//         ){
//             alert(`you choose ${humanChoice}. computer choose ${computerChoice}. You win.`);
//             humanScore++;
//         } else {
//             alert(`you choose ${humanChoice}. computer choose ${computerChoice}. You Loose`);
//             computerScore++;
//         }
//     }
    //Play the Game 5 times
    for(let i=1; i<=5; i++) {
        alert(`Round ${i}. Get Ready!`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        alert(`Your score: ${humanScore}. computer Score: ${computerScore}.`);
    }
//     if(humanScore < computerScore) {
//         alert("You loose the Game.");
//     } else if(humanScore > computerScore){
//         alert("You won the Game.");
//     } else {
//         alert("Too Bad, the game was tie...");
//     }

// }
// console.log(playGame())
// playGame();



