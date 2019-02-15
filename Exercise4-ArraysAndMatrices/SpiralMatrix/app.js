function SpiralMatrix(rowsCount, colsCount) {
	function rotateMatrix(matrix, direction) {
		const N = matrix.length - 1;
		if (direction > 0) {
			return matrix.map((row, i) => row.map((cell, j) => matrix[N - j][i]));
		}
		if (direction < 0) {
			return matrix.map((row, i) => row.map((cell, j) => matrix[j][N - i]));
		}
	}
	let matrix = [];
	for (let row = 0; row < rowsCount; row++) {
		let matrixRow = [];
		for (let col = 0; col < colsCount; col++) {
			matrixRow.push(undefined);
		}
		matrix.push(matrixRow);
	}
	let cellValue = 1;
	for (let layer = 0; layer <= Math.floor(matrix.length / 2); layer++) {
		let wall = matrix[layer];
		while (wall.includes(undefined)) {
			for (let i = 0; i < wall.length; i++) {
				if (!wall[i]) wall[i] = cellValue++;
			}
			matrix = rotateMatrix(matrix, -1);
			wall = matrix[layer];
		}
	}
	if (matrix.length % 2 === 0) matrix = rotateMatrix(matrix, -1);
	else matrix = rotateMatrix(matrix, 1);
	for (let row = 0; row < matrix.length; row++) {
		console.log(matrix[row].join(' '));
	}
}

SpiralMatrix(3, 3);
SpiralMatrix(4, 4);
SpiralMatrix(5, 5);
