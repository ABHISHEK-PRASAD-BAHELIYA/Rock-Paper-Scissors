let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msgPara = document.querySelector('#msg');

const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw.")
    msgPara.innerText = ("Game was Draw. play again.")
    msgPara.style.backgroundColor = "#081b31"
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = `Player: ${userScore}`
        console.log("YOU WON ! 🎉");
        msgPara.innerText = `You won ! 🎉 Your ${userChoice} beats ${ compChoice}`;
        msgPara.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = `Computer: ${compScore}`;
        console.log("YOU LOOSE !");
        msgPara.innerText = `You lost. :-( ${compChoice} beats Your ${userChoice}`;
        msgPara.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice --> modular
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});