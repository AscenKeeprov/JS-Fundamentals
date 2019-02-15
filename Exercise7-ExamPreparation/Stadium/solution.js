function solve() {
	function parentSelector(element, selector) {
		let parent = element.parentElement;
		if (selector) {
			while (parent) {
				if (parent.matches(selector)) return parent;
				parent = parent.parentElement;
			}
			return null;
		} else return parent;
	}
	let ticketPrices = {
		'Levski': { 'A': 10, 'B': 7, 'C': 5 },
		'Litex': { 'A': 10, 'B': 7, 'C': 5 },
		'VIP': { 'A': 25, 'B': 15, 'C': 10 },
	}
	let fans = 0;
	let profit = 0;
	let output = document.getElementById('output');
	let seats = Array.from(document.getElementsByClassName('seat'));
	seats.forEach(seat => seat.addEventListener('click', () => {
		let seatNumber = seat.textContent;
		let zone = parentSelector(seat, 'section').className;
		let sector = String.fromCharCode(seat.parentElement.cellIndex + 65);
		if (seat.style.backgroundColor) {
			output.value += ` Seat ${seatNumber} in zone ${zone} sector ${sector} is unavailable.\n`;
		} else {
			let ticketPrice = ticketPrices[zone][sector];
			profit += ticketPrice;
			fans++;
			seat.style.backgroundColor = 'rgb(255,0,0)';
			output.value += ` Seat ${seatNumber} in zone ${zone} sector ${sector} was taken.\n`;
		}
	}));
	let summary = document.getElementById('summary');
	let summaryText = summary.getElementsByTagName('span')[0];
	let summaryButton = summary.getElementsByTagName('button')[0];
	summaryButton.addEventListener('click', () => {
		summaryText.textContent = `${profit} leva, ${fans} fans.`;
	});
}