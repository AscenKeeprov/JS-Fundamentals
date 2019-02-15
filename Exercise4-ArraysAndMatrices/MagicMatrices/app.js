function MagicMatrix(matrix) {
	let isMagicMatrix = true;
	let sum = matrix[0].reduce((n1, n2) => n1 + n2);
	for (let row = 1; row < matrix.length; row++) {
		let rowSum = matrix[row].reduce((n1, n2) => n1 + n2);
		if (rowSum !== sum) {
			isMagicMatrix = false;
			break;
		}
	}
	if (isMagicMatrix) {
		for (let col = 0; col < matrix[0].length; col++) {
			let colSum = 0;
			for (let item = 0; item < matrix.length; item++) {
				colSum += matrix[item][col];
			}
			if (colSum !== sum) {
				isMagicMatrix = false;
				break;
			}
		}
	}
	console.log(isMagicMatrix);
}

MagicMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
MagicMatrix([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
MagicMatrix([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);
