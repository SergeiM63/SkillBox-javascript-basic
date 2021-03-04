'use strict'

// let roadMines = [true, true, true, true, true, true, true, true, true, true];
let roadMines = [true, false, false, false, false, false, false, false, false, true];
// let roadMines = [false, false, false, true, false, false, false, false, false, false];
// let roadMines = [false, false, false, false, false, false, false, false, false, false];
let roadLength = 10;
let tankDamage = 0;
//     <--
for(let i = 0; i < roadLength; i++) {
  console.log(`танк переместился на позицию: ${i + 1}`);
  if(roadMines[i] && tankDamage === 1) {
		console.log("танк уничтожен");
		break;
	}
  if(roadMines[i]) {
  	tankDamage += 1
  	console.log("танк поврежден");
  }
}
