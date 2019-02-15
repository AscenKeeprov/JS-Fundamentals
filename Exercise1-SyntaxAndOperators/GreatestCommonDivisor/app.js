function GreatestCommonDivisor(num1, num2) {
	num1 = Math.abs(num1);
	num2 = Math.abs(num2);
	while (num2) {
		let gcd = num2;
		num2 = num1 % num2;
		num1 = gcd;
	}
	console.log(num1);
}

GreatestCommonDivisor(15, 5);
GreatestCommonDivisor(5, 15);
GreatestCommonDivisor(2154, 458);
GreatestCommonDivisor(-458, 2154);
