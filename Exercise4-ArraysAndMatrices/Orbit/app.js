function Orbit([colsCount, rowsCount, starRow, starCol]) {
	let matrix = [];
	for (let row = 0; row < rowsCount; row++) {
		matrix[row] = [];
		for (let col = 0; col < colsCount; col++) {
			matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
		}
		console.log(matrix[row].join(' '));
	}
}

Orbit([4, 4, 0, 0]);
Orbit([5, 5, 2, 2]);
Orbit([3, 3, 2, 2]);
