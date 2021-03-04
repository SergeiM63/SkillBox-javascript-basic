'use strict'
// Генератор случайного нечётного числа от n до m
// n необязательно меньше чем m
getRandomOddNumber(2, 5);
getRandomOddNumber(100, -5);
getRandomOddNumber(-3, 10);

function getRandomOddNumber(n, m) {
	let randomNumber = 0;
	while (randomNumber % 2 === 0) {
		// Количество цифр, которые могут быть сгенерированы
		let range = Math.abs(m - n);
		// округление чисел от 0 до range
		let numberInRage = Math.round(Math.random() * range);
		// левая граница возможного числа
		let min = Math.min(m, n);
		randomNumber = min + numberInRage;
	}
	console.log(randomNumber);
}
