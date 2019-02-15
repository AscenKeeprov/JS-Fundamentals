function solve() {
	let myButtons = Array.from(document.getElementsByName('myBtn'));
	let myChatBox = document.getElementById('myChatBox');
	let peshoButtons = Array.from(document.getElementsByName('peshoBtn'));
	let peshoChatBox = document.getElementById('peshoChatBox');
	let chatChronology = document.getElementById('chatChronology');
	function SendMessage(senderName, messageText, textAlignment) {
		let message = document.createElement('p');
		message.innerHTML = messageText;
		let sender = document.createElement('span');
		sender.innerHTML = senderName;
		let messageBox = document.createElement('div');
		messageBox.style.textAlign = textAlignment;
		messageBox.appendChild(sender);
		messageBox.appendChild(message);
		chatChronology.appendChild(messageBox);
	}
	myButtons.forEach((button) => {
		button.addEventListener('click', () => {
			if (myChatBox.value) {
				SendMessage('Me', myChatBox.value, 'left');
				myChatBox.value = '';
			}
		});
	});
	peshoButtons.forEach((button) => {
		button.addEventListener('click', () => {
			if (peshoChatBox.value) {
				SendMessage('Pesho', peshoChatBox.value, 'right');
				peshoChatBox.value = '';
			}
		});
	});
}