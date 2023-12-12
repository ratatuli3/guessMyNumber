'use strict';

let secretNumber = (document.querySelector(`.number`).value = Math.trunc(
  Math.random() * 20
));
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector(`.message`).textContent = message;
}

function assignScore() {
  document.querySelector(`.score`).textContent = score;
}

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  //Invalid Guess
  if (!guess) {
    displayMessage(`Invalid Value!`);

    //When guess is wrong
  } else if (guess != secretNumber) {
    if (score > 0) {
      guess > secretNumber
        ? displayMessage(`Go Lower!`)
        : displayMessage(`Go Higher`);
      score--;
      assignScore();
    } else {
      displayMessage(`You Lost!`);
    }

    //When guess is correct
  } else if (guess === secretNumber) {
    displayMessage(`Correct number!`);
    document.querySelector(`.number`).textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
  }
});

// document.querySelector(`.again`).addEventListener(`click`, function () {
//   location.reload();
// });

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  assignScore();
  secretNumber = document.querySelector(`.number`).value = Math.trunc(
    Math.random() * 20
  );
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).textContent = `?`;
  displayMessage(`Start guessing...`);
  document.querySelector(`.guess`).value = ``;
});
