'use strict'

let userArray = ["Привет, Мир!", "Hello World!", " ", "Some String.", "++i"];

for(let i = 0; i <= userArray.length - 1; i++) {
  let reversedString = userArray[i].split("").reverse().join("");
  console.log((reversedString));
}
