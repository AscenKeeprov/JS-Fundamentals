function solve() {
	Array.prototype.transpose = function () {
		return this[0].map((col, i) => this.map(row => row[i]));
	}
	Array.prototype.col = function (colNumber) {
		return this.map(row => row[colNumber]);
	}
	let result = document.getElementById('result');
	result.innerHTML = '';
	let matrix1 = JSON.parse(document.getElementById('mat1').value);
	let matrix2 = JSON.parse(document.getElementById('mat2').value);
	if (matrix1[0].length !== matrix2[0].length) matrix2 = matrix2.transpose();
	let resultMatrix = [];
	for (let row = 0; row < matrix1.length; row++) {
		let resultRow = [];
		for (let col = 0; col < matrix2.length; col++) {
			let productsSum = 0;
			for (let i = 0; i < matrix1[row].length; i++) {
				productsSum += matrix1[row][i] * matrix2[col][i];
			}
			resultRow.push(productsSum);
		}
		resultMatrix.push(resultRow);
	}
	for (let row = 0; row < resultMatrix.length; row++) {
		let paragraph = document.createElement('p');
		paragraph.textContent = resultMatrix[row].join(', ');
		result.appendChild(paragraph);
	}
}