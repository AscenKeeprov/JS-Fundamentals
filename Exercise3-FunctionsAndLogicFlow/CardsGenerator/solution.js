function solve() {
	const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
	let startCard = document.getElementById('from');
	let endCard = document.getElementById('to');
	let suits = document.querySelector('#exercise > select');
	let hand = document.getElementById('cards');
	function generateCard(cardValue, suitSymbol) {
		let card = document.createElement('div');
		card.className = 'card';
		let cardSection = document.createElement('p');
		for (let i = 1; i <= 3; i++) {
			card.appendChild(cardSection.cloneNode());
		}
		card.firstChild.textContent = suitSymbol;
		card.querySelector(':not(:first-child):not(:last-child)').textContent = cardValue;
		card.lastChild.textContent = suitSymbol;
		return card;
	}
	function cardInHand(card, hand) {
		if (!card) return false;
		let ownedCards = Array.from(hand.children);
		for (let ownedCard of ownedCards) {
			if (ownedCard.innerHTML === card.innerHTML) return true;
		}
		return false;
	}
	let generateButton = document.querySelector('#exercise > button');
	generateButton.addEventListener('click', () => {
		let startIndex = cardValues.indexOf(startCard.value.toUpperCase());
		let endIndex = cardValues.indexOf(endCard.value.toUpperCase());
		if (startIndex >= 0 && endIndex >= 0) {
			let suit = suits.value.split('')[suits.value.length - 1];
			if (startIndex > endIndex) [startIndex, endIndex] = [endIndex, startIndex];
			for (let i = startIndex; i <= endIndex; i++) {
				let card = generateCard(cardValues[i], suit);
				if (!cardInHand(card, hand)) hand.appendChild(card);
			}
		}
	});
}