'use strict'

	let password = prompt("Введите пароль");
	checkPassword(password);
//     <--
function checkPassword(password) {
	password.includes("_") && password.length > 3 ||
	password.includes("-") && password.length > 3 ?
		alert(`"${password}" Пароль надежный`) :
		alert(`"${password}" Пароль недостаточно надежный`);
}
