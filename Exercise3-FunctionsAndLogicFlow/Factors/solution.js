function solve() {
	let number = Number(document.getElementById('num').value);
	let factors = [];
	for (i = 1; i <= Math.floor(Math.sqrt(number)); i++) {
		if (number % i === 0) {
			factors.push(i);
			if (number / i !== i) factors.push(number / i);
		}
	}
	factors.sort((x, y) => x - y);
	let result = document.getElementById('result');
	result.textContent = factors.join(' ');
}