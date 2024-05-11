let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("game was draw.")
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice --> modular
    const compChoice = genCompChoice();
    console.log(compChoice);

    if(userChoice === compChoice) {
        drawGame();
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});