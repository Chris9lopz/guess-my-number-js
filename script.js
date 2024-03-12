'use strict';

// Random number
const randomNumber = Math.floor(Math.random() * 20) + 1;
// Define a global highscore
let globalHighscore = 0;

// DOM elements
const scoreElement = document.querySelector('.score');
const messageElement = document.querySelector('.message');
const highscoreElement = document.querySelector('.highscore');
const numberElement = document.querySelector('.number');
const bodyElement = document.querySelector('body');
const againElement = document.querySelector('.again');

// Define the previously highscore
let highscore = sessionStorage.getItem('highscore');
if (highscore === null) {
  highscoreElement.textContent = '0';
} else {
  highscoreElement.textContent = highscore;
}
// Create an event of check button
document.querySelector('.check').addEventListener('click', () => {
  // Save the number fill by the user
  const guessNumber = Number(document.querySelector('.guess').value);
  // Retrieve the actual score
  let actualScore = Number(scoreElement.textContent);

  // Validate if a number is introduce by the user
  if (!guessNumber || guessNumber < 1 || guessNumber > 20) {
    messageElement.textContent = '❌ Invalid input, try again!';
    // Check the score if is greater than 0
    if (actualScore > 1) {
      scoreElement.textContent = actualScore - 1;
    } else {
      scoreElement.textContent = '0';
      messageElement.textContent = '😫 Sorry, you lose the game, try again!';
    }
  } else {
    // Validate if the random number and guess number are equals
    if (guessNumber === randomNumber) {
      // Add logic: change message clase, add number, and change background color
      bodyElement.classList.add('correct-guess');
      numberElement.textContent = guessNumber;
      messageElement.textContent = '✅ Correct!';
      // Set the new highscore in session storage
      if (actualScore > globalHighscore) {
        globalHighscore = actualScore;
        if(globalHighscore > highscore) {
          sessionStorage.setItem('highscore', globalHighscore);
          highscoreElement.textContent = globalHighscore; 
        } 
      }
    } else {
      // Add logic: Add the message of failure, reduce the number of the score. 
      messageElement.textContent = guessNumber > randomNumber ? '❌ Incorrect, number too high!' : '❌ Incorrect, number too low!';
      // Check the score if is greater than 0
      if (actualScore > 1) {
        scoreElement.textContent = actualScore - 1;
      } else {
        scoreElement.textContent = '0';
        messageElement.textContent = '😫 Sorry, you lose the game, try again!';
      }
    }
  }
});

// Create an event when again button is clicked
againElement.addEventListener('click', () => {
  location.reload();
});