function binarySearch() {
	let numbers = document.getElementById('arr').value
		.replace(/\D+/g, ' ').trim()
		.split(' ').map(i => parseInt(i));
	let number = Number(document.getElementById('num').value);
	let findIndex, middleIndex;
	let lowerIndex = 0;
	let upperIndex = numbers.length - 1;
	while (lowerIndex <= upperIndex) {
		middleIndex = Math.floor((lowerIndex + upperIndex) / 2);
		if (numbers[middleIndex] === number) {
			findIndex = middleIndex;
			break;
		}
		else if (numbers[middleIndex] < number) lowerIndex = middleIndex + 1;
		else upperIndex = middleIndex - 1;
	}
	let result = document.getElementById('result');
	if (findIndex !== undefined) result.textContent = `Found ${number} at index ${findIndex}`;
	else result.textContent = `${number} is not in the array`;
}