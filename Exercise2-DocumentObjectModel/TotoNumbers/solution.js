function solve() {
	const minNumber = 1;
	const maxNumber = 49;
	const nonDigitsPattern = /\D+/g;
	let totoForm = document.getElementById('myNumbers');
	let totoFormButton = totoForm.getElementsByTagName('button')[0];
	totoFormButton.addEventListener('click', function handler(event) {
		let totoFormInputField = totoForm.getElementsByTagName('input')[0]
		let totoFormNumbers = totoFormInputField.value
			.replace(nonDigitsPattern, ' ')
			.trim().split(nonDigitsPattern)
			.map(i => parseInt(i))
			.filter(n => n >= minNumber && n <= maxNumber);
		if (totoFormNumbers.length === 6) {
			let totoFormGraph = document.getElementById('allNumbers');
			for (let n = minNumber; n <= maxNumber; n++) {
				let totoFormGraphElement = document.createElement('div');
				totoFormGraphElement.className = 'numbers';
				totoFormGraphElement.textContent = n;
				if (totoFormNumbers.includes(n)) {
					totoFormGraphElement.style.background = 'orange';
				}
				totoFormGraph.appendChild(totoFormGraphElement);
			}
			event.currentTarget.removeEventListener(event.type, handler);
			event.currentTarget.setAttribute('disabled', 'disabled');
			totoFormInputField.setAttribute('disabled', 'disabled');
		}
	});
}