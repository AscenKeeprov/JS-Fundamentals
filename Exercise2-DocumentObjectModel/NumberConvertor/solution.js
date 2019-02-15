function solve() {
	let convertToSelect = document.getElementById('selectMenuTo');
	let binaryOption = document.createElement('option');
	binaryOption.value = 2;
	binaryOption.innerHTML = 'Binary';
	convertToSelect.appendChild(binaryOption);
	let hexOption = document.createElement('option');
	hexOption.value = 16;
	hexOption.innerHTML = 'Hexadecimal';
	convertToSelect.appendChild(hexOption);
	let decimalInput = document.getElementsByTagName('input')[0];
	let convertButton = document.getElementsByTagName('button')[0];
	let result = document.getElementById('result');
	convertButton.addEventListener('click', () => {
		let baseToConvertTo = Number(convertToSelect.value);
		if (baseToConvertTo) {
			let numberToConvert = Number(decimalInput.value);
			result.value = Math.abs(numberToConvert).toString(baseToConvertTo).toUpperCase();
			if (numberToConvert < 0) result.value = '-' + result.value;
		}
	});
}
/* SoftUni's flawed solution: */
//function solve() {
//	let convertToSelect = document.getElementById('selectMenuTo');
//	let binaryOption = document.createElement('option');
//	binaryOption.value = 'binary';
//	binaryOption.innerHTML = 'Binary';
//	convertToSelect.appendChild(binaryOption);
//	let hexOption = document.createElement('option');
//	hexOption.value = 'hexadecimal';
//	hexOption.innerHTML = 'Hexadecimal';
//	convertToSelect.appendChild(hexOption);
//	let decimalInput = document.getElementsByTagName('input')[0];
//	let convertButton = document.getElementsByTagName('button')[0];
//	let result = document.getElementById('result');
//	convertButton.addEventListener('click', () => {
//		let baseToConvertTo = undefined;
//		switch (convertToSelect.value) {
//			case 'binary':
//				baseToConvertTo = 2;
//				break;
//			case 'hexadecimal':
//				baseToConvertTo = 16;
//				break;
//			default: baseToConvertTo = undefined;
//		}
//		if (baseToConvertTo) {
//			let numberToConvert = Number(decimalInput.value);
//			result.value = Math.abs(numberToConvert).toString(baseToConvertTo).toUpperCase();
//			if (numberToConvert < 0) result.value = '-' + result.value;
//		}
//	});
//}