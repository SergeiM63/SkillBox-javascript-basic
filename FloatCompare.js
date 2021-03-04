'use strict'

compareNumbers(13.123456789, 2.123, 5);
console.log("---------------------------------\n");

compareNumbers(13.890123, 2.891564, 2);
console.log("---------------------------------\n");

compareNumbers(13.890123, 2.891564, 3);
console.log("---------------------------------\n");

function compareNumbers(a, b, n) {
	let aNormolized = Math.round((a % 1) * Math.pow(10, n));
	let bNormolized = Math.round((b % 1) * Math.pow(10, n));

	console.log(`Первое число: ${a}`);
	console.log(`Второе число: ${b}`);
	console.log(`Сравнение до ${n} знаков после запятой:`);
	console.log('Исходные числа равны', a === b);
	console.log('Исходные числа не равны', a !== b);
	console.log(`Сравниваем дробные части ${aNormolized} и ${bNormolized}`)
	console.log('Дробные части чисел равны', aNormolized === bNormolized);
	console.log('Дробные части чисел равны', aNormolized !== bNormolized);
	console.log('Первое число больше', aNormolized > bNormolized);
	console.log('Первое число меньше', aNormolized < bNormolized);
	console.log('Первое число больше или равно Второму', aNormolized >= bNormolized);
	console.log('Первое число меньше или равно Второму', aNormolized <= bNormolized);
}
