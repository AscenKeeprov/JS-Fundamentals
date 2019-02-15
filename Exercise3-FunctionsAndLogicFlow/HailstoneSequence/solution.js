function getNext() {
	let number = Number(document.getElementById('num').value);
	let sequence = [number];
	while (number !== 1) {
		if (number % 2 === 0) number /= 2;
		else number = (number * 3) + 1;
		sequence.push(number);
	}
	let result = document.getElementById('result');
	result.textContent = sequence.join(' ');
}
/* SoftUni's flawed solution */
//function getNext() {
//	let number = Number(document.getElementById('num').value);
//	let sequence = `${number} `;
//	while (number !== 1) {
//		if (number % 2 === 0) number /= 2;
//		else number = (number * 3) + 1;
//		sequence += `${number} `;
//	}
//	let result = document.getElementById('result');
//	result.textContent = sequence;
//}