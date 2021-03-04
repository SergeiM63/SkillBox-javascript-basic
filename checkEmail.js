'use strict'

let userEmail = [
	"bad@mail.ru", "abc@yandex.ru", "Aaa@google.com", "bad@ya.ru", "qwerty@google.com",
	"bad@google.com", "good@mail.ru", "hello@goods.ru", "hello@world.com", "bad@bad.com"
];
let blackListEmail = ["bad@mail.ru", "bad@ya.ru", "bad@google.com", "bad@bad.com"];
let checkedArray =[];
console.log(checkIncludesArray(userEmail, blackListEmail));

function checkIncludesArray(checkArray, searchArray) {
	for (let i = 0; i < checkArray.length; i++) {
		if (searchArray.indexOf(checkArray[i]) === -1) {
			checkedArray.push(checkArray[i]);
		}
	}
	return checkedArray;
}

// export default {checkIncludesArray};
