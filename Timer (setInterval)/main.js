'use strict'

const button = document.getElementById('button');
const input = document.getElementById('input');
const timerDisplay = document.getElementById('timerDisplay');
timerDisplay.innerHTML = 0;
let count;
let timerID;

document.addEventListener('DOMContentLoaded', () => {

  button.addEventListener('click', () => {
    clearInterval(timerID);
    input.value > 0 ? count = input.value : count = 0;
    timerID = setInterval(timer, 1000);

    function timer() {
      timerDisplay.innerHTML = count;
      count > 0 ? count-- : clearInterval(timerID);
    }
  });

});