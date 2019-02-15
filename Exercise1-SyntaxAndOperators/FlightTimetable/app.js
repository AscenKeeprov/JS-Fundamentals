function FlightTimetable(flightInfo) {
	console.log(`${flightInfo[0]}: `
		+ `Destination - ${flightInfo[1]}, `
		+ `Flight - ${flightInfo[3]}, `
		+ `Time - ${flightInfo[2]}, `
		+ `Gate - ${flightInfo[4]}`);
}

FlightTimetable(['Departures', 'London', '22:45', 'BR117', '42']);
FlightTimetable(['Arrivals', 'Paris', '02:22', 'VD17', '3']);
