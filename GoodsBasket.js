'use strict'

let discount = 0;
let goodsPrice = 60000;
let goodsAmount = 10;
let promocode = "СКИДКА15";

function checkPromo300(promo, sum) {
	if(promo === "ДАРИМ300") {
		sum -= 300;
		return	sum;
	}
	return sum;
}

function checkPromoAmount(amount, sum) {
	if(amount >= 10) {
		sum *= 0.95;
		return	sum;
	}
	return sum;
}

function checkPromo50000(sum) {
	if(sum > 50000) {
		sum *= 0.8;
		return sum;
	}
	return sum;
}

function checkPromo15(promo, sum) {
	if(sum >= 20000 && promo === "СКИДКА15") {
		sum *= 0.85;
		return	sum;
	}
	return sum;
}

function checkPrice(amount, sum) {
	if(sum === 0 || amount === 0) {
		return goodsPrice = 0;
	}

	sum = checkPromo300(promocode, sum);
	sum = checkPromoAmount(goodsAmount, sum);
	sum = checkPromo50000(sum);
	sum = checkPromo15(promocode, sum);

	discount = goodsPrice - sum;
	return goodsPrice = sum, discount;
}
checkPrice(goodsAmount, goodsPrice);
console.log(`Общая сумма покупки: ${goodsPrice}\nОбщая сумма скидки: ${discount}`);

// export default {function};
