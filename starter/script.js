'use strict';

// document.querySelector('.message');

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 10;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;


document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔No number'


        // winner part
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉Correct number!';

        // background color change
        document.querySelector('body').style.backgroundColor = '#60b347';

        // box size in number change
        document.querySelector('.number').style.width = '30rem';
        // show the numer
        document.querySelector('.number').textContent = secretNumber;
        //highscore check
        if (score > highscore) {
            highscore = score;
        }
        document.querySelector('.highscore').textContent = highscore;


        // wrong part
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈Too high!';
            score--;
            document.querySelector('.score').textContent = score;

        } else {
            document.querySelector('.score').textContent = score;
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😒You lose!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.number').textContent = secretNumber;
})
