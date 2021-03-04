"use srtict"

let gameBot = function() {

function randomIntNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

randomNumber = randomIntNumber(1, 1000);
getUserNumber();

function getUserNumber() {
userNumber = prompt("Угадай число от 1 до 1000");
if (isNaN(userNumber) || userNumber == "") {
  alert("Введите число!");
  getUserNumber();
}
else if (!userNumber) {
alert("Игра окончена!");
alert("Пока!")
}
else {
  checkNumber(userNumber);
  }
}

function checkNumber(userNumber) {
  if (userNumber > randomNumber) {
    alert("Введите число поменьше!");
    getUserNumber();
    }
  else if (userNumber < randomNumber) {
        alert("Введите число побольше!");
        getUserNumber();
      }
      else {
       answer = confirm("Вы угадали! Попробывать ещё раз?");
       if (!answer) {
        alert("Пока!");
       }
       else gameBot();
      }
  }
}
gameBot();