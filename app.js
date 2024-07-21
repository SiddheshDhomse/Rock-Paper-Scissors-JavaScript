let userScore = 0;
let compScore = 0;

let userScoreElement = document.getElementById("userScore");
let compScoreElement = document.getElementById("compScore");

let choices = document.querySelectorAll(".choice");
let msgBox = document.getElementById("msgCont");

const genCompChoice = function(){
    let options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
}

const playGame = function(userId){
    console.log("user choice =", userId);
    const compChoice = genCompChoice();
    console.log("computer choice =", compChoice);

    if(userId === compChoice){
        console.log("DRAW GAME");
        msgBox.innerText = "Game Is Draw";
        msgBox.style.backgroundColor = "Blue";
    } else if (
        (userId === "rock" && compChoice === "scissors") ||
        (userId === "paper" && compChoice === "rock") ||
        (userId === "scissors" && compChoice === "paper")
    ) {
        console.log("USER WINS");
        msgBox.innerText = "You Win!";
        msgBox.style.backgroundColor = "Green";
        userScore++;
        userScoreElement.innerText = (userScore);

    } else {
        console.log("COMPUTER WINS");
        msgBox.innerText = "Computer Wins!";
        msgBox.style.backgroundColor = "Red";
        compScore++;
        compScoreElement.innerText = (compScore);
    }

    console.log("User Score:", userScore, "Computer Score:", compScore);
}

choices.forEach((choice) => {
    choice.addEventListener("click", function() {
        const userId = choice.getAttribute("id");
        console.log("clicked", userId);
        playGame(userId);
    });
});
