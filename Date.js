'use strict'

let dayNumberArray = [];
for(let i = 1; i <= 31; i++) {
	dayNumberArray.push(i);
}
//     <--
let days = [
	"воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"
];
let year = 2020;
let currentDay = 1;
//     <--
for(let day in dayNumberArray) {
	let date = new Date(`January ${currentDay}, ${year}`);
	let weekDay = date.getDay();
	console.log(`${parseInt(day) + 1} января, ${days[weekDay]}`);
	currentDay++;
}
