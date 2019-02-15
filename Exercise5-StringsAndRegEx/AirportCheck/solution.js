function solve() {
	function extractCompanyName(airportData) {
		const companyPattern = /(?:- ([A-Z][A-Za-z]*\*[A-Z][A-Za-z]*) )/;
		return companyPattern.exec(airportData)[1].replace(/\*/g, ' ');
	}
	function extractFlightInformation(airportData) {
		const airportPattern = /(?: ([A-Z]{3})\/([A-Z]{3}) )/;
		const flightNumberPattern = /(?: ([A-Z]{1,3}\d{1,5}) )/;
		let flightNumber = flightNumberPattern.exec(airportData)[1];
		let airports = airportPattern.exec(airportData);
		return [flightNumber, airports[1], airports[2]];
	}
	function extractPassengerName(airportData) {
		const namePattern = /(?: ([A-Z][A-Za-z]*(?:-[A-Z][A-Za-z]*\.)?-[A-Z][A-Za-z]*) )/;
		return namePattern.exec(airportData)[1].replace(/-/g, ' ');
	}
	let input = document.getElementById('str').value.split(',');
	let airportData = input[0];
	let requestedData = input[1].trim().toUpperCase();
	let result = document.getElementById('result');
	if (requestedData === 'ALL') {
		let passengerName = extractPassengerName(airportData);
		let [flightNumber, airportFrom, airportTo] = extractFlightInformation(airportData);
		let companyName = extractCompanyName(airportData);
		result.textContent = `Mr/Ms, ${passengerName}, your flight number ${flightNumber} is from ${airportFrom} to ${airportTo}. Have a nice flight with ${companyName}.`
	}
	if (requestedData === 'COMPANY') {
		let companyName = extractCompanyName(airportData);
		result.textContent = `Have a nice flight with ${companyName}.`;
	}
	if (requestedData === 'FLIGHT') {
		let [flightNumber, airportFrom, airportTo] = extractFlightInformation(airportData);
		result.textContent = `Your flight number ${flightNumber} is from ${airportFrom} to ${airportTo}.`;
	}
	if (requestedData === 'NAME') {
		let passengerName = extractPassengerName(airportData);
		result.textContent = `Mr/Ms, ${passengerName}, have a nice flight!`;
	}
}