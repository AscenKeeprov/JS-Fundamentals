function TimeToWalk(distanceInSteps, strideLengthInMeters, speedInKilometersPerHour) {
	if (isNaN(distanceInSteps)
		|| isNaN(strideLengthInMeters)
		|| isNaN(speedInKilometersPerHour)) {
		console.log('Invalid input!');
		return false;
	}
	let restDurationInSeconds = 60;
	let distanceInMeters = distanceInSteps * strideLengthInMeters;
	let restsCount = Math.floor(distanceInMeters / 500);
	let restTimeInSeconds = restsCount * restDurationInSeconds;
	let speedInMetersPerSecond = speedInKilometersPerHour / 3.6;
	let walkTimeInSeconds = Math.round(distanceInMeters / speedInMetersPerSecond) + restTimeInSeconds;
	let seconds = walkTimeInSeconds;
	let minutes = 0;
	let hours = 0;
	if (seconds > 59) {
		minutes = Math.floor(seconds / 60);
		seconds -= minutes * 60;
	}
	if (minutes > 59) {
		hours = Math.floor(minutes / 60);
		minutes -= hours * 60;
	}
	Number.prototype.FormatWithLeadingZeros = function (outputLength) {
		if (isNaN(outputLength)) console.log('Invalid output length!');
		let inputString = this.toString();
		let outputString = inputString;
		let inputLength = inputString.length;
		let leadingZerosLength = outputLength - inputLength;
		if (leadingZerosLength > 0) {
			outputString = '0'.repeat(leadingZerosLength) + inputString;
		}
		return outputString;
	}
	let secondsString = seconds.FormatWithLeadingZeros(2);
	let minutesString = minutes.FormatWithLeadingZeros(2);
	let hoursString = hours.FormatWithLeadingZeros(2);
	console.log(`${hoursString}:${minutesString}:${secondsString}`);
}

TimeToWalk(4000, 0.60, 5);
TimeToWalk(2564, 0.70, 5.5);
TimeToWalk(9876, 0.47, 5.2);
TimeToWalk('1000 steps', 0.70, 5.5);
