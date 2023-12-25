'use strict';
let sceretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//Creating oject for function to use in the code to keep it clean and dry;
const message = {
  displayNumber: function (message) {
    document.querySelector('.message').textContent = message;
  },
};

//For the Working of Check button;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.displayNumber('😡 Not a Number');
  } else if (score > 1) {
    if (guess === sceretNumber) {
      message.displayNumber('🎉 you won');
      document.querySelector('.number').textContent = sceretNumber;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = '#60b347';
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else {
      if (guess > 0 && guess <= 20) {
        message.displayNumber(
          guess > sceretNumber ? '😅 To High' : '😅 To Low'
        );
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        message.displayNumber('Choose Between 1 - 20');
      }
    }
  } else {
    message.displayNumber('😩 Game Over');
    document.querySelector('.score').textContent = 0;
  }
});

// For working of Again button;
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  sceretNumber = Math.trunc(Math.random() * 20) + 1;
  message.displayNumber('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
