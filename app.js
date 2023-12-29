let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const botScorePara = document.querySelector("#bot-score");

const genBotChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randInx = Math.floor(Math.random() * 3);
    return options[randInx];
}

const drawGame = () => {
    msg.innerText = "Game Was Draw, Play Again!";
    msg.style.backgroundColor = "yellow";
};

const showWinner = (userWin, userChoice, botChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} Beats ${botChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        botScore++;
        botScorePara.innerText = botScore;
        msg.innerText = `You Lose! ${userChoice} Beats Your ${botChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // console.log("user choice =", userChoice);
    //Generate computer choice --> (modular way programming)
    const botChoice = genBotChoice();
    console.log("bot choice =", botChoice);


if (userChoice === botChoice) {
    //Draw Game
    drawGame();
} else {
    let userWin = true;
    if (userChoice === "Rock") {
        //scissors, paper
        userWin = botChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
        //rock, scissors
        userWin = botChoice === "Scissors" ? false : true;
    }else {
        //rock , paper
        userWin = botChoice === "Rock" ? false : true;
    }

    showWinner(userWin, userChoice, botChoice);
}
} 
 

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
})