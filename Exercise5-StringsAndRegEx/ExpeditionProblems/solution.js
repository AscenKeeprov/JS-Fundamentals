function solve() {
	const coordinatesPattern = /(east|north).*?(\d{2})[^,]*,[^,]*?(\d{6})/gi;
	let keyword = document.getElementById('str').value;
	let messagePattern = new RegExp(`(${keyword})(.*)\\1`, 'g');
	let encodedText = document.getElementById('text').value;
	let message = messagePattern.exec(encodedText)[2];
	let coordinates = encodedText.match(coordinatesPattern);
	let northCoordinates = coordinates.filter(c => c.toUpperCase().startsWith('NORTH'));
	let latitude = coordinatesPattern.exec(northCoordinates[northCoordinates.length - 1]);
	coordinatesPattern.lastIndex = 0;
	let eastCoordinates = coordinates.filter(c => c.toUpperCase().startsWith('EAST'));
	let longitude = coordinatesPattern.exec(eastCoordinates[eastCoordinates.length - 1]);
	let decodedText = document.getElementById('result');
	decodedText.innerHTML += `<p>${latitude[2]}.${latitude[3]} N</p>`;
	decodedText.innerHTML += `<p>${longitude[2]}.${longitude[3]} E</p>`;
	decodedText.innerHTML += `<p>Message: ${message}</p>`;
}