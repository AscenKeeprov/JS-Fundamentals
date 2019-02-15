function DrinkMachine(orders) {
	let moneyEarned = 0.00;
	for (let order of orders) {
		order = order.toLowerCase();
		let orderInfo = order.split(', ');
		let coinsInserted = parseFloat(orderInfo[0]);
		let drinkType = orderInfo[1];
		let orderPrice = 0.80;
		if (drinkType === 'coffee' && order.includes('decaf')) {
			orderPrice = 0.90;
		}
		if (order.includes('milk')) {
			orderPrice = Math.round(orderPrice * 11) / 10;
		}
		let sugarAmount = parseInt(orderInfo[orderInfo.length - 1]);
		if (sugarAmount >= 1 && sugarAmount <= 5) {
			orderPrice += 0.10;
		}
		let change = coinsInserted - orderPrice;
		if (change >= 0) {
			console.log(`You ordered ${drinkType}. Price: ${orderPrice.toFixed(2)}$ Change: ${change.toFixed(2)}$`);
			moneyEarned += orderPrice;
		} else {
			console.log(`Not enough money for ${drinkType}. Need ${Math.abs(change).toFixed(2)}$ more.`);
		}
	}
	console.log(`Income Report: ${moneyEarned.toFixed(2)}$`);
}

DrinkMachine([
	'1.00, coffee, caffeine, milk, 4',
	'0.40, tea, milk, 2',
	'1.00, coffee, decaf, 0'
]);
DrinkMachine([
	'8.00, coffee, decaf, 4',
	'1.00, tea, 2'
]);
