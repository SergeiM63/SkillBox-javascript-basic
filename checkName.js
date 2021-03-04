'use strict'

let name = prompt("Введите Имя");
let surname = prompt("Введите Фамилию");

checkName(name);
checkSurname(surname);

function checkName(name) {
	let nameNormolized = name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();
	name === nameNormolized ?
		alert(`Имя: "${nameNormolized}" - осталось без изменений`) :
		alert(`Имя: "${nameNormolized}" - было преобразовано`);
}

function checkSurname(surname) {
	let surnameNormolized = surname.substring(0, 1).toUpperCase() + surname.substring(1).toLowerCase();
	surname === surnameNormolized ?
		alert(`Фамилия: "${surnameNormolized}" - осталась без изменений`) :
		alert(`Фамилия: "${surnameNormolized}" - была преобразована`);
}