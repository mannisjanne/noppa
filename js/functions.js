'use strict';

const diceImg = document.getElementById('dice-img');

const calculate = () => {
    const randomNumber = Math.floor((Math.random() * 6) + 1);
    const imageUrl = `./kuvat/${randomNumber}.png`;
    diceImg.src = imageUrl;
}

const dice = document.getElementById('dice');
dice.addEventListener('click', calculate);