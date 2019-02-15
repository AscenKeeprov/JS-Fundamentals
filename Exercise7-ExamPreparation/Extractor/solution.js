function solve() {
	let extractButton = document.querySelector('#exercise > button');
	extractButton.addEventListener('click', () => {
		let input = document.getElementById('input').value;
		let charactersToTakeCount = /^\d+/g.exec(input);
		let output = input.substr(charactersToTakeCount.length + 1, Number(charactersToTakeCount));
		let splitter = output[output.length - 1];
		let parts = output.split(splitter).filter(p => p);
		let removalPattern = new RegExp(`[${parts[0]}]`, 'g');
		output = parts[1].replace(removalPattern, '').replace(/#/g, ' ');
		document.getElementById('output').value = output;
	});
}