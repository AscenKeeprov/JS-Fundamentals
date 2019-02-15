function CalorieObject(calorieInfo) {
	if (calorieInfo.length % 2 !== 0) {
		console.log('Invalid input!');
		return false;
	}
	let calorieObject = {};
	for (var i = 0; i < calorieInfo.length; i += 2) {
		let foodName = calorieInfo[i];
		let foodCalories = calorieInfo[i + 1];
		calorieObject[foodName] = Number(foodCalories);
	}
	console.log(calorieObject);
}

CalorieObject(['Yoghurt', 48, 'Rice', 138, 'Apple', 52]);
CalorieObject(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]);
