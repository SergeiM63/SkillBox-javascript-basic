//(Задание 1) Написать текущую дату
"use strict"

currentDateTime();
setInterval(currentDateTime, 1000);

function currentDateTime() {
  let date = new Date(),
  hoursCount = date.getHours(),
  minutesCount = date.getMinutes(),
  secondsCount = date.getSeconds(),
  day = date.getDay(),
//         <--
  months = [
    "января", "февраля", "марта", "апреля", "мая", "июня", 
    "июля", "августа", "сентября", "октября", "ноября", "декабря"
  ],
  days = [
    "воскресенье", "понедельник", "вторник", "среда", "четверг", 
    "пятница", "суббота"
  ];
//         <--
let hours = ["час", "часа", "часов"];
let minutes = ["минута", "минуты", "минут"];
let seconds = ["секунда", "секунды", "секунд"];
//         <--
console.log(
    "Сегодня " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + 
    " " + "года, " + days[day] + ", " + hoursCount + " " + declOfNum(hoursCount, hours) + " " +
    minutesCount + " " + declOfNum(minutesCount, minutes) + " " + secondsCount + " " + declOfNum(secondsCount, seconds)
  );
}

function declOfNum(number, titles) {  
  let cases = [2, 0, 1, 1, 1, 2]; 
  return titles[ (number%100>4 && number%100<20) ? 2 : cases[(number%10<5)?number%10:5] ]
}