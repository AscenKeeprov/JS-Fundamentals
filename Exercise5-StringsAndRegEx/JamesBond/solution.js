function solve() {
	function newParagraph(content) {
		let paragraph = document.createElement('p');
		paragraph.textContent = content;
		return paragraph;
	}
	let decodedLines = document.getElementById('result');
	decodedLines.innerHTML = '';
	let input = JSON.parse(document.getElementById('arr').value);
	let key = input[0];
	let keyPattern = key.split('')
		.map(c => `[${c.toUpperCase()}${c.toLowerCase()}]`).join('');
	let encodedLines = input.slice(1);
	const messageTextPattern = '[ ]+([A-Z!#$%]{8,})(?: |,|\\.|$)';
	let messageRegExp = new RegExp(`(?:^| )${keyPattern}${messageTextPattern}`, 'gm');
	for (let line of encodedLines) {
		let encodedMessages = line.match(messageRegExp);
		if (encodedMessages) {
			for (let encodedMessage of encodedMessages) {
				let messageText = messageRegExp.exec(encodedMessage)[1];
				messageRegExp.lastIndex = 0;
				let decodedMessage = messageText.toLowerCase()
					.replace(/!/g, '1')
					.replace(/%/g, '2')
					.replace(/#/g, '3')
					.replace(/\$/g, '4');
				line = line.replace(messageText, decodedMessage);
			}
		}
		decodedLines.appendChild(newParagraph(line));
	}
}