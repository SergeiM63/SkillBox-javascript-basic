'use strict'

let randomArray = [];
let count = 70;
let randomNumber;
//     <--
for(let i = 0; i < count; i++) {
  getRandomNumber(100, -5)
  randomArray.push(randomNumber);
}
//     <--
function getRandomNumber(firstNumber, secondNumber) {
  let range = Math.abs(firstNumber - secondNumber);
  let numberInRage = Math.round(Math.random() * range);
  let min = Math.min(firstNumber, secondNumber);
  return randomNumber = min + numberInRage;
}
//     <--
console.log(randomArray);