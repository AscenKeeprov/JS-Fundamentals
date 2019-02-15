function validate() {
	const months = {
		'January': { index: '01', days: '31' },
		'February': { index: '02', days: '28' },
		'March': { index: '03', days: '31' },
		'April': { index: '04', days: '30' },
		'May': { index: '05', days: '31' },
		'June': { index: '06', days: '30' },
		'July': { index: '07', days: '31' },
		'August': { index: '08', days: '31' },
		'September': { index: '09', days: '30' },
		'October': { index: '10', days: '31' },
		'November': { index: '11', days: '30' },
		'December': { index: '12', days: '31' },
	}
	const genders = { 'Male': '2', 'Female': '1' }
	const weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
	function isLeapYear(year) {
		return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	}
	function getMaxMonthDays(month, year) {
		if (!month || !months[month]) return '31';
		if (isLeapYear(year) && month === 'February') return '29';
		return months[month].days;
	}
	function resetInputFields() {
		yearInput.value = '';
		monthSelect.value = monthSelect.children[0].value;
		dateInput.value = '';
		genderInputs.forEach(i => i.checked = false);
		regionInput.value = '';
	}
	let yearInput = document.getElementById('year');
	yearInput.addEventListener('change', (event) => {
		let maxMonthDays = getMaxMonthDays(monthSelect.value, event.target.value);
		dateInput.setAttribute('max', maxMonthDays);
	});
	let monthSelect = document.getElementById('month');
	monthSelect.addEventListener('change', (event) => {
		let maxMonthDays = getMaxMonthDays(event.target.value, yearInput.value);
		dateInput.setAttribute('max', maxMonthDays);
	});
	let dateInput = document.getElementById('date');
	let genderInputs = Array.from(document.getElementsByName('gender'));
	let regionInput = document.getElementById('region');
	let egnOutput = document.getElementById('egn');
	let generateButton = document.querySelector('#exercise button');
	generateButton.addEventListener('click', () => {
		let year = yearInput.value;
		if (year < 1900 || year > 2100) return;
		let yearToken = yearInput.value.slice(-2);
		let monthToken = months[monthSelect.value].index;
		if (!monthToken) return;
		let date = dateInput.value;
		if (!date) return;
		let dateToken = date < 10 ? `0${date}` : date;
		let gender = genderInputs.filter(i => i.checked)[0];
		if (!gender) return;
		let genderToken = genders[gender.value];
		let region = regionInput.value;
		if (!region || region < 43 || region > 999) return;
		let regionToken = (region < 100 ? `0${region}` : region).slice(0, -1);
		/* SoftUni's incorrect interpretation:
		 * let regionToken = region < 100 ? region : region.slice(0, -1);
		 * */
		let egn = `${yearToken}${monthToken}${dateToken}${regionToken}${genderToken}`;
		let controlSum = 0;
		for (let i = 0; i < weights.length; i++) {
			controlSum += egn[i] * weights[i];
		}
		let controlDigit = controlSum % 11;
		if (controlDigit === 10) controlDigit = 0;
		egn += String(controlDigit);
		egnOutput.textContent = `Your EGN is: ${egn}`;
		resetInputFields();
	});
}