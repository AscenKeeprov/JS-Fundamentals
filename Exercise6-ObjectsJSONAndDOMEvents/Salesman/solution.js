function solve() {
	let storage = {};
	let storageLog = document.querySelector('textarea:disabled');
	let buttons = Array.from(document.getElementsByTagName('button'));
	let loadButton = buttons.filter(b => b.textContent === 'Load')[0];
	loadButton.addEventListener('click', loadProducts);
	function loadProducts() {
		let productsToLoad = JSON.parse(document.querySelector('textarea:not(:disabled)').value);
		for (let product of productsToLoad) {
			if (!storage.hasOwnProperty(product.name)) {
				storage[product.name] = {
					price: product.price,
					quantity: product.quantity
				}
			} else {
				storage[product.name].price = product.price;
				storage[product.name].quantity += product.quantity;
			}
			storageLog.textContent += `Successfully added ${product.quantity} ${product.name}. Price: ${product.price}\n`;
		}
	}
	let cash = 0;
	let sellButton = buttons.filter(b => b.textContent === 'Buy')[0];
	sellButton.addEventListener('click', sellProducts);
	function sellProducts() {
		let productsToSell = JSON.parse(document.querySelectorAll('textarea:not(:disabled)')[1].value);
		if (!Array.isArray(productsToSell)) productsToSell = [productsToSell];
		for (let product of productsToSell) {
			if (storage.hasOwnProperty(product.name)
				&& storage[product.name].quantity >= product.quantity) {
				storage[product.name].quantity -= product.quantity;
				let profit = product.quantity * storage[product.name].price;
				storageLog.textContent += `${product.quantity} ${product.name} sold for ${profit}.\n`;
				cash += profit;
			} else storageLog.textContent += 'Cannot complete order.\n';
		}
	}
	let endDayButton = buttons.filter(b => b.textContent === 'End Day')[0];
	endDayButton.addEventListener('click', closeShop);
	function closeShop() {
		storageLog.textContent += `Profit: ${cash.toFixed(2)}.\n`;
		loadButton.removeEventListener('click', loadProducts);
		sellButton.removeEventListener('click', sellProducts);
		endDayButton.removeEventListener('click', closeShop);
	}
}