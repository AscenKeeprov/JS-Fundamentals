function solve() {
	let cart = [];
	let cartLog = document.querySelector('textarea:disabled');
	let addButtons = Array.from(document.querySelectorAll('.product button'));
	addButtons.forEach(b => b.addEventListener('click', (event) => {
		let product = event.target.parentNode;
		let productName = product.getElementsByTagName('p')[0].textContent;
		let productPrice = Number(product.getElementsByTagName('p')[1]
			.textContent.match(/(\d+(?:\.\d+)?)/)[1]);
		cart.push({ name: productName, price: productPrice });
		cartLog.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
	}));
	let buyButton = Array.from(document.getElementsByTagName('button'))
		.filter(b => b.textContent === 'Buy')[0];
	buyButton.addEventListener('click', () => {
		let productsList = cart.map(p => p.name)
			.filter((name, index, names) => names.indexOf(name) === index);
		let productsPrice = cart.map(p => p.price).reduce((p1, p2) => p1 + p2);
		cartLog.textContent += `You bought ${productsList.join(', ')} for ${productsPrice.toFixed(2)}.\n`;
	});
}