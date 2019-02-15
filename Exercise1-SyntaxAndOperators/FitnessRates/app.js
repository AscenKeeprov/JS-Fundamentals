function FitnessRates(dayOfWeek, service, timeOfDay) {
	if (timeOfDay < 0.00 || timeOfDay > 23.59 || timeOfDay % 1 > 0.59) {
		console.log('Invalid time!');
	} else if (timeOfDay < 8.00 || timeOfDay > 22.00) {
		console.log('Outside working hours.');
	} else {
		String.prototype.format = function () {
			let string = this;
			for (i in arguments) {
				string = string.replace(`{${i}}`, arguments[i]);
			}
			return string;
		}
		let invalidServiceMessage = "Gym does not provide service '{0}'.";
		let priceRate = 4.00;
		switch (dayOfWeek) {
			case 'Monday':
			case 'Tuesday':
			case 'Wednesday':
			case 'Thursday':
			case 'Friday':
				switch (service) {
					case 'Fitness':
						priceRate = 5.00;
						break;
					case 'Instructor':
						priceRate = 10.00;
						break;
					case 'Sauna':
						priceRate = 4.00;
						break;
					default:
						console.log(invalidServiceMessage.format(service));
						return;
				}
				if (timeOfDay > 15.00) {
					priceRate += 2.50;
				}
				break;
			case 'Saturday':
			case 'Sunday':
				switch (service) {
					case 'Fitness':
						priceRate = 8.00;
						break;
					case 'Instructor':
						priceRate = 15.00;
						break;
					case 'Sauna':
						priceRate = 7.00;
						break;
					default:
						console.log(invalidServiceMessage.format(service));
						return;
				}
				break;
			default: console.log('Invalid day!');
		}
		console.log(priceRate);
	}
}

FitnessRates('Monday', 'Sauna', 14.30);
FitnessRates('Monday', 'Sauna', 15.30);
FitnessRates('Saturday', 'Fitness', 8.00);
FitnessRates('Sunday', 'Fitness', 22.00);
FitnessRates('Tuesday', 'Yoga', 11.15);
FitnessRates('Wednesday', 'Fitness', 7.59);
FitnessRates('Friday', 'Instructor', 24);
FitnessRates('Thursday', 'Sauna', 9.6);
