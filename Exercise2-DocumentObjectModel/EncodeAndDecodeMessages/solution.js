function solve() {
	function EncodeText(text) {
		let encodedText = '';
		for (let letter of text) {
			let letterCharCode = letter.charCodeAt(0);
			encodedText += String.fromCharCode(letterCharCode + 1);
		}
		return encodedText;
	}
	function DecodeText(text) {
		let decodedText = '';
		for (let letter of text) {
			let letterCharCode = letter.charCodeAt(0);
			decodedText += String.fromCharCode(letterCharCode - 1);
		}
		return decodedText;
	}
	let textareas = Array.from(document.getElementsByTagName('textarea'));
	let encodeTextArea = textareas.filter(function (textarea) {
		return !textarea.disabled;
	})[0];
	let encodeButton = Array.from(encodeTextArea.parentElement.children)
		.filter(c => c.tagName === 'BUTTON')[0];
	let textDecoded = true;
	encodeButton.addEventListener('click', () => {
		decodeTextArea.value = EncodeText(encodeTextArea.value);
		encodeTextArea.value = '';
		textDecoded = false;
	});
	let decodeTextArea = textareas.filter(function (textarea) {
		return textarea.disabled;
	})[0];
	let decodeButton = Array.from(decodeTextArea.parentElement.children)
		.filter(c => c.tagName === 'BUTTON')[0];
	decodeButton.addEventListener('click', () => {
		if (!textDecoded) {
			let encodedText = decodeTextArea.value;
			decodeTextArea.value = DecodeText(encodedText);
			textDecoded = true;
		}
	});
}