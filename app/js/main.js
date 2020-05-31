const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll(".option button");
        const playerHand = document.querySelectorAll(".play-hand");
        const computerHand = document.querySelectorAll(".computer-hand");

        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach((option) => {
            option.addEventListener("click", () => {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                compareHands(this.textContent, computerChoice);

                playerHand.src = `./img/${this.textContent}.png`;
                computerHand.src `./img/${computerChoice}.png`;
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");
        if (playerChoice === computerChoice) {
            winner.textContent = "jest remis";
            return;
        }
        //kamień
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "Wygrał Player";
                return;
            } else {
                winner.textContent = "Wygrał Computer";
                return;
            }
        }
        //papier
        if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                winner.textContent = "Wygrał Computer";
                return;
            } else {
                winner.textContent = "Wygrał Player";
                return;
            }
        }
        //nozyce
        if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                winner.textContent = "Wygrał Computer";
                return;
            } else {
                winner.textContent = "Wygrał Player";
                return;
            }
        }
    };

    startGame();
    playMatch();
};

game();