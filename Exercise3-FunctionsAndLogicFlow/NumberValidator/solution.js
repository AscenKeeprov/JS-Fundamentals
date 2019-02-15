function validate() {
	const weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
	let numberInput = document.querySelector('#exercise input[type="number"]');
	let validationOutput = document.getElementById('response');
	let validateButton = document.querySelector('#exercise button');
	validateButton.addEventListener('click', () => {
		validationOutput.textContent = '';
		if (numberInput.value) {
			let numberString = numberInput.value;
			let lastDigit = Number(numberString[numberString.length - 1]);
			let digitWeightsSum = 0;
			for (var i = 0; i < weights.length; i++) {
				digitWeightsSum += numberString[i] * weights[i];
			}
			let remainder = digitWeightsSum % 11;
			if (remainder === 10) remainder = 0;
			if (lastDigit === remainder) validationOutput.textContent = 'This number is Valid!';
			else validationOutput.textContent = 'This number is NOT Valid!';
		}
	});
}