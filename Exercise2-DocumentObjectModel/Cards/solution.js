function solve() {
	let cards = document.getElementById('exercise').querySelectorAll('img');
	let player1Result = document.getElementById('result').children[0];
	let player2Result = document.getElementById('result').children[2];
	let scores = document.getElementById('history');
	let player1Card = undefined;
	let player2Card = undefined;
	let playedCardImage = 'images/whiteCard.jpg';
	for (let card of cards) {
		card.addEventListener('click', function handler(event) {
			let cardNumber = Number(card.getAttribute('name'));
			if (card.parentElement.id === 'player1Div' && player1Card === undefined) {
				player1Result.innerHTML = cardNumber;
				player1Card = card;
				player1Card.src = playedCardImage;
				player1Card.removeEventListener(event.type, handler);
			} else if (card.parentElement.id === 'player2Div' && player2Card === undefined) {
				player2Result.innerHTML = cardNumber;
				player2Card = card;
				player2Card.src = playedCardImage;
				player2Card.removeEventListener(event.type, handler);
			}
			if (player1Card && player2Card) {
				let player1Score = Number(player1Result.innerHTML);
				let player2Score = Number(player2Result.innerHTML);
				if (player1Score > player2Score) {
					player1Card.style.border = '2px solid green';
					player2Card.style.border = '2px solid darkred';
				} else if (player1Score < player2Score) {
					player1Card.style.border = '2px solid darkred';
					player2Card.style.border = '2px solid green';
				}
				scores.innerHTML += `[${player1Score} vs ${player2Score}] `;
				player1Result.innerHTML = '';
				player2Result.innerHTML = '';
				player1Card = undefined;
				player2Card = undefined;
			}
		});
	}
}