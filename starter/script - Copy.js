'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('⛔No number');

        // winner part
    } else if (guess === secretNumber) {
        displayMessage('🎉Correct number!');

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

        // loosing part
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');

            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('😒You lose!');
            document.querySelector('.score').textContent = 0;
        }
    }

});

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
})
