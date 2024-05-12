'use strict';

let randNum = Math.trunc(Math.random() * 20) + 1;
let scoreData = 10;
let highScoreData = 0;

function msg(msg) {
  document.querySelector('.message').textContent = msg;
}
function score(score) {
  document.querySelector('.score').textContent = score;
}
function bg(bg) {
  document.querySelector('body').style.background = bg;
}
function hideNumber(hideNumber) {
  document.querySelector('.number').textContent = hideNumber;
}
function highScore(highScore) {
  document.querySelector('.highscore').textContent = highScore;
}

let inputNum = document.querySelector('.guess');

document.querySelector('.check').addEventListener('click', function () {
  if (scoreData > 1) {
    if (!inputNum.value || inputNum.value < 0 || inputNum.value > 20) {
      alert('Please enter a Number between 0 to 20❌');
    } else if (inputNum.value == randNum) {
      msg('Conguratulation ! You won the game👏🎉'); //calling message fun
      hideNumber(randNum);
      bg('green');
      highScore(
        scoreData > highScoreData
          ? (highScoreData = scoreData)
          : (highScoreData = highScoreData)
      );
    } else {
      msg(inputNum.value > randNum ? `Number is bigger` : `Number is smaller`);

      scoreData--;
      score(scoreData);
    }
  } else {
    msg('You Lost the 🎆');
    bg('brown');
    score(scoreData - 1);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  scoreData = 10;
  score(scoreData);
  bg('black');
  randNum = Math.trunc(Math.random() * 20) + 1;
  hideNumber('?');
  inputNum.value = '';
  msg('Start guessing...');
});
