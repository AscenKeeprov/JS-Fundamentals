function RotateArray(array) {
	let rotationsCount = Number(array.pop());
	rotationsCount %= array.length;
	for (let rotation = 1; rotation <= rotationsCount; rotation++) {
		array.unshift(array.pop());
	}
	console.log(array.join(' '));
}

RotateArray(['1', '2', '3', '4', '2']);
RotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
