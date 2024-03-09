'use strict';

// 1. Generate a random number to guess
// 2. Create an event that start the logic of the program

// Random number
const randomNumber = Math.floor(Math.random() * 20) + 1;
// Define a global highscore
let globalHighscore = 0;
console.log(randomNumber); // Testing
// Create an event of check button
document.querySelector('.check').addEventListener('click', () => {
  // Save the number fill by the user
  const guessNumber = Number(document.querySelector('.guess').value);
  // Retrieve the actual score
  let actualScore = Number(document.querySelector('.score').textContent);
  // Validate if a number is introduce by the user
  if(!guessNumber){
    document.querySelector('.message').textContent = '❌ Not a number';
    globalHighscore = document.querySelector('.score').textContent = actualScore - 1;
  } else if (guessNumber < 1 || guessNumber > 20) {
    document.querySelector('.message').textContent = '❌ Number out of range, try again!';
    globalHighscore = document.querySelector('.score').textContent = actualScore - 1;
  } else {
    // Validate if the random number and guess number are equals
    if(guessNumber === randomNumber){
      // Add logic: change message clase, add number, and change background color
      document.querySelector('body').classList.add('correct-guess');
      document.querySelector('.number').textContent = guessNumber;
      document.querySelector('.message').textContent = '✅ Correct!';
      document.querySelector('.highscore').textContent = actualScore;
    } else {
      // Add logic: Add the message of failure, reduce the number of the score.
      document.querySelector('.message').textContent = '❌ Incorrect, keep trying!';
      globalHighscore = document.querySelector('.score').textContent = actualScore - 1;
      if (globalHighscore === 0) {
        document.querySelector('.message').textContent = '❌ Sorry, you lose.';
      }
    }
  }
});

console.log(globalHighscore);