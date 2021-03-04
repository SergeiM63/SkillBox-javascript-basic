'use strict'

let rectangleArea;

getRectangleArea(2, 3, 10, 5)
console.log(rectangleArea);

getRectangleArea(10, 5, 2, 3)
console.log(rectangleArea);

getRectangleArea(-5, 8, 10, 5)
console.log(rectangleArea);

getRectangleArea(5, 8, 5, 5)
console.log(rectangleArea);

getRectangleArea(8, 1, 5, 1)
console.log(rectangleArea);

function getRectangleArea(x1, y1, x2, y2) {
	let x = Math.abs(x1 - x2);
	let y = Math.abs(y1 - y2);
	return rectangleArea = x * y;
}
