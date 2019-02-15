function leapYear() {
	function checkLeapYear(year) {
		return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	}
	let yearInput = document.querySelector('#exercise > input[type="number"]');
	let yearOutput = document.getElementById('year');
	let yearOutputText = yearOutput.getElementsByTagName('h2')[0];
	let yearOutputNumber = yearOutput.getElementsByTagName('div')[0];
	let checkButton = document.querySelector('#exercise > button');
	checkButton.addEventListener('click', () => {
		if (yearInput.value) {
			yearOutputText.textContent = '';
			yearOutputNumber.innerHTML = '';
			let isLeapYear = checkLeapYear(yearInput.value);
			if (isLeapYear) yearOutputText.textContent = 'Leap Year';
			else yearOutputText.textContent = 'Not Leap Year';
			yearOutputNumber.innerHTML = yearInput.value;
			yearInput.value = '';
		}
	});
}