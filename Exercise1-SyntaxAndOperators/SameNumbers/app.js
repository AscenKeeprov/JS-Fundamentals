function SameDigits(number) {
	numberString = Math.abs(number).toString();
	let firstDigitString = numberString[0];
	let allDigitsAreSame = true;
	let sumDigits = 0;
	for (let digitString of numberString) {
		sumDigits += parseInt(digitString);
		if (digitString != firstDigitString) {
			allDigitsAreSame = false;
		}
	}
	console.log(allDigitsAreSame);
	console.log(sumDigits);
}

SameDigits(2222222);
SameDigits(1234);
SameDigits(-52);
SameDigits(0);
