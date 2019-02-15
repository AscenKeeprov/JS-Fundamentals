function solve() {
	let furnitureList = document.getElementById('furniture-list');
	let buttons = Array.from(document.getElementsByTagName('button'));
	let generateButton = buttons.filter(b => b.textContent === 'Generate')[0];
	generateButton.addEventListener('click', () => {
		let furniture = JSON.parse(document.querySelector('textarea:not(:disabled)').value);
		for (let piece of furniture) {
			let pieceDivision = document.createElement('div');
			pieceDivision.className = 'furniture';
			let nameParagraph = document.createElement('p');
			nameParagraph.textContent = `Name: ${piece.name}`;
			pieceDivision.appendChild(nameParagraph);
			let pieceImage = document.createElement('img');
			pieceImage.src = piece.img;
			pieceDivision.appendChild(pieceImage);
			let priceParagraph = document.createElement('p');
			priceParagraph.textContent = `Price: ${piece.price.toFixed(2)}`;
			pieceDivision.appendChild(priceParagraph);
			let decorationParagraph = document.createElement('p');
			decorationParagraph.textContent = `Decoration factor: ${piece.decFactor}`;
			pieceDivision.appendChild(decorationParagraph);
			let pieceCheckbox = document.createElement('input');
			pieceCheckbox.type = 'checkbox';
			pieceDivision.appendChild(pieceCheckbox);
			furnitureList.appendChild(pieceDivision);
		}
	});
	let buyButton = buttons.filter(b => b.textContent === 'Buy')[0];
	buyButton.addEventListener('click', () => {
		let receipt = document.querySelector('textarea:disabled');
		let furnitureBought = Array.from(furnitureList.children)
			.filter(f => f.querySelector('input[type="checkbox"]:checked'));
		let furnitureBoughtNames = [];
		let furnitureBoughtTotalPrice = 0;
		let furnitureBoughtDecorationFactors = [];
		for (let piece of furnitureBought) {
			let pieceInfo = Array.from(piece.getElementsByTagName('p'))
				.map(p => p.textContent.split(': ')[1]);
			furnitureBoughtNames.push(pieceInfo[0]);
			furnitureBoughtTotalPrice += Number(pieceInfo[1]);
			furnitureBoughtDecorationFactors.push(Number(pieceInfo[2]));
		}
		let averageDecorationFactor = furnitureBoughtDecorationFactors
			.reduce((df1, df2) => df1 + df2) / furnitureBoughtDecorationFactors.length;
		receipt.textContent += `Bought furniture: ${furnitureBoughtNames.join(', ')}\n`;
		receipt.textContent += `Total price: ${furnitureBoughtTotalPrice.toFixed(2)}\n`;
		receipt.textContent += `Average decoration factor: ${averageDecorationFactor}`;
	});
}