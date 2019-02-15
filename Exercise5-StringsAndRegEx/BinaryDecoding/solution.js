function solve() {
	const characterCodeLength = 8;
	let bitsString = document.getElementById('str').value;
	let bitsWeight = Array.from(bitsString)
		.filter(b => b == 1)
		.map(b => Number(b))
		.reduce((b1, b2) => b1 + b2);
	while (bitsWeight > 9) {
		bitsWeight = String(bitsWeight).split('')
			.map(string => Number(string))
			.reduce((b1, b2) => b1 + b2);
	}
	let characterBits = bitsString.slice(bitsWeight, bitsString.length - bitsWeight);
	let charactersCount = Math.ceil(characterBits.length / characterCodeLength);
	let characters = [];
	for (let c = 1; c <= charactersCount; c++) {
		let characterBinaryCode = characterBits.substr(0, characterCodeLength);
		let characterAsciiCode = parseInt(characterBinaryCode, 2);
		let character = String.fromCharCode(characterAsciiCode);
		characters.push(character);
		characterBits = characterBits.slice(characterCodeLength);
	}
	let allowedCharacters = characters.filter(c => /[A-Za-z ]/g.test(c));
	let textString = document.getElementById('result');
	textString.textContent = allowedCharacters.join('');
}