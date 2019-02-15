function solve() {
	Array.prototype.sortDescending = function () {
		return this.sort((a, b) => {
			if (a > b) return -1;
			else if (a < b) return 1;
			else return 0;
		});
	}
	let outputParagraph = document.querySelector('#output > p');
	let filterButton = document.querySelector('#filter > button');
	filterButton.addEventListener('click', () => {
		let input = document.getElementById('input').value;
		let filterType = document.getElementById('filterSecondaryCmd').value;
		let filterPosition = document.getElementById('filterPosition').value;
		let matches = [];
		switch (filterType.toUpperCase()) {
			case 'UPPERCASE':
				matches = input.match(/[A-Z]/g);
				break;
			case 'LOWERCASE':
				matches = input.match(/[a-z]/g);
				break;
			case 'NUMS':
				matches = input.match(/\d/g);
				break;
		}
		if (matches && filterPosition > 0 && filterPosition <= matches.length)
			outputParagraph.textContent += matches[filterPosition - 1];
	});
	let sortButton = document.querySelector('#sort > button');
	sortButton.addEventListener('click', () => {
		let sortOrder = document.getElementById('sortSecondaryCmd').value;
		let sortPosition = document.getElementById('sortPosition').value;
		let characters = document.getElementById('input').value.split('');
		if (characters && sortPosition > 0 && sortPosition <= characters.length) {
			switch (sortOrder.toUpperCase()) {
				case 'A':
					outputParagraph.textContent += characters.sort()[sortPosition - 1];
					break;
				case 'Z':
					outputParagraph.textContent += characters.sortDescending()[sortPosition - 1];
					break;
			}
		}
	});
	let rotateButton = document.querySelector('#rotate > button');
	rotateButton.addEventListener('click', () => {
		let characters = document.getElementById('input').value.split('');
		let rotationsCount = document.getElementById('rotateSecondaryCmd').value % characters.length;
		for (let rotation = 1; rotation <= rotationsCount; rotation++) {
			characters.splice(0, 0, characters.pop());
		}
		let rotatePosition = document.getElementById('rotatePosition').value;
		if (rotatePosition > 0 && rotatePosition <= characters.length) {
			outputParagraph.textContent += characters[rotatePosition - 1];
		}
	});
	let getButton = document.querySelector('#get > button');
	getButton.addEventListener('click', () => {
		let characters = document.getElementById('input').value.split('');
		let getPosition = document.getElementById('getPosition').value;
		if (getPosition > 0 && getPosition <= characters.length) {
			outputParagraph.textContent += characters[getPosition - 1];
		}
	});
}