function FruitMoney(fruit, weightInGrams, pricePerKilogram) {
	let weightInKilograms = weightInGrams / 1000;
	let totalPrice = weightInKilograms * pricePerKilogram;
	console.log(`I need ${totalPrice.toFixed(2)} leva to buy ${weightInKilograms.toFixed(2)} kilograms ${fruit}.`);
}

FruitMoney('apple', 1563, 2.35);
FruitMoney('orange', 2500, 1.80);
FruitMoney('grapes', 3456, 3.45);
