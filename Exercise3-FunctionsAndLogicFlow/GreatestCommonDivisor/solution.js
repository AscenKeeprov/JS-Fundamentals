function greatestCD() {
	let number1 = Number(document.getElementById('num1').value);
	let number2 = Number(document.getElementById('num2').value);
	let gcdOutput = document.getElementById('result');
	if (!number2) {
		gcdOutput.textContent = number1;
		return;
	}
	let greatestCommonDivisor = undefined;
	while (number2) {
		greatestCommonDivisor = number2;
		number2 = number1 % number2;
		number1 = greatestCommonDivisor;
	}
	gcdOutput.textContent = greatestCommonDivisor;
}