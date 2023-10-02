"use strict";

// Button
const btnCheck = document.querySelector(".check");

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
const numberRandom = Math.trunc(Math.random() * 20) + 1;
let score = 20;

// Fonction
function LosingGame(score) {
  if (score == 0) {
    textMessage.textContent = "C'est perdu !";
    textScore.textContent = `💯 Score: 0`;
    textSecretNumber.textContent = String(numberRandom);
    body.style.background = "#FF0000";
  }
}

function Game(number) {
  if (number > numberRandom) {
    textMessage.textContent = "Plus bas !";
    score--;
    textScore.textContent = `💯 Score: ${score}`;
  } else if (number < numberRandom) {
    textMessage.textContent = "Plus haut !";
    score--;
    textScore.textContent = `💯 Score: ${score}`;
  } else if (number == numberRandom) {
    textMessage.textContent = "Trouvé !";
    textSecretNumber.textContent = String(numberRandom);
    body.style.background = "#60b347";
    textHighScore.textContent = `🥇 plus haut score: ${score}`;
  }
}

btnCheck.addEventListener("click", () => {
  let number = Number(inputNumber.value);
  Game(number);
  LosingGame(score);
});
