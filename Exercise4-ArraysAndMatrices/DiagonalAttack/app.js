function DiagonalAttack(input) {
	let matrix = [];
	for (let string of input) {
		let row = string.split(' ')
			.map(i => Number(i));
		matrix.push(row);
	}
	let diagonalSum1 = 0;
	let diagonalSum2 = 0;
	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[row].length; col++) {
			if (row === col) diagonalSum1 += matrix[row][col];
			if (row + col === matrix.length - 1) diagonalSum2 += matrix[row][col];
		}
	}
	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[row].length; col++) {
			if (diagonalSum1 === diagonalSum2 && row !== col
				&& row + col !== matrix.length - 1) {
				matrix[row][col] = diagonalSum1;
			}
		}
		console.log(matrix[row].join(' '));
	}
}

DiagonalAttack([
	'0 1 2',
	'1 1 3',
	'2 3 4']);
DiagonalAttack([
	'1 1 1',
	'1 1 1',
	'1 1 0']);
DiagonalAttack([
	'5 3 12 3 1',
	'11 4 23 2 5',
	'101 12 3 21 10',
	'1 4 5 2 2',
	'5 22 33 11 1']);
