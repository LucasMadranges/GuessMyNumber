"use strict";

// Button
const btnCheck = document.querySelector(".check");
const btnRestart = document.querySelector(".again");

// Text
const textMessage = document.querySelector(".message");
const textScore = document.querySelector(".label-score");
const textHighScore = document.querySelector(".label-highscore");
const textSecretNumber = document.querySelector(".number");

// Input
const inputNumber = document.querySelector(".guess");

// Body
const body = document.querySelector("body");

// Valeurs
let numberRandom = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Fonction
function LosingGame(score) {
  if (score == 0) {
    textMessage.textContent = "⛔️ Perdu !";
    textScore.textContent = `💯 Score: 0`;
    textSecretNumber.textContent = String(numberRandom);
    body.style.background = "#cc0000";
  }
}

function Game(number) {
  if (number > numberRandom) {
    textMessage.textContent = "📈 Trop haut !";
    score--;
    textScore.textContent = `💯 Score: ${score}`;
  } else if (number < numberRandom) {
    textMessage.textContent = "📉 Trop bas !";
    score--;
    textScore.textContent = `💯 Score: ${score}`;
  } else if (number == numberRandom) {
    textMessage.textContent = "✅ Trouvé !";
    textSecretNumber.textContent = String(numberRandom);
    body.style.background = "#60b347";

    if (highscore < score) {
      textHighScore.textContent = `🥇 Plus haut score: ${score}`;
      highscore = score;
    }
  }
}

function restartGame() {
  numberRandom = Math.trunc(Math.random() * 20) + 1;
  textMessage.textContent = "Commence à chercher...";
  body.style.background = "#222";
  score = 20;
  textScore.textContent = `💯 Score: ${score}`;
}

// Evenement
btnCheck.addEventListener("click", () => {
  let number = Number(inputNumber.value);
  Game(number);
  LosingGame(score);
});

btnRestart.addEventListener("click", () => {
  restartGame();
});
