let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

// Get score elements from your existing HTML
const userScorePara = document.querySelector(".your-score p");
const compScorePara = document.querySelector(".comp-score p");

const msg = document.querySelector("#msg");

const choicesArray = ["rock", "paper", "scissor"];


// Computer's random choice
function getComputerChoice() {

    let randomIndex = Math.floor(Math.random() * 3);

    return choicesArray[randomIndex];
}


// Main game function
function playGame(userChoice) {

    let compChoice = getComputerChoice();

    console.log("You:", userChoice);
    console.log("Computer:", compChoice);


    // Remove previous result colors
    msg.classList.remove("win");
    msg.classList.remove("lose");


    // DRAW
    if (userChoice === compChoice) {

        msg.innerText = "It's a draw!";

    }


    // USER WIN
    else if (
        (userChoice === "rock" && compChoice === "scissor") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissor" && compChoice === "paper")
    ) {

        userScore++;

        userScorePara.innerText = userScore;

        msg.innerText = "You win!";

        msg.classList.add("win");

    }


    // COMPUTER WIN
    else {

        compScore++;

        compScorePara.innerText = compScore;

        msg.innerText = "Computer wins!";

        msg.classList.add("lose");

    }
}


// Add click event to all three choices
choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        let userChoice = choice.getAttribute("id");

        playGame(userChoice);

    });

});