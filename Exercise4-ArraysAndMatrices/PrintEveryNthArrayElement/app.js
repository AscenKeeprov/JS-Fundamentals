function PrintEveryNthArrayElement(array) {
	let step = Number(array.pop());
	for (let i = 0; i < array.length; i++) {
		if (i % step === 0) console.log(array[i]);
	}
}

PrintEveryNthArrayElement(['5', '20', '31', '4', '20', '2']);
PrintEveryNthArrayElement(['dsa', 'asd', 'test', 'tset', '2']);
PrintEveryNthArrayElement(['1', '2', '3', '4', '5', '6']);
