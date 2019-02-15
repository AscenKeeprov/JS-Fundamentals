function solve() {
	let garage = { tireSets: [], trucks: [] };
	let tireSetsLog = document.getElementsByTagName('fieldset')[3]
		.getElementsByTagName('div')[0];
	let trucksLog = document.getElementsByTagName('fieldset')[4]
		.getElementsByTagName('div')[0];
	let addTruckButton = document.getElementsByTagName('button')[0];
	addTruckButton.addEventListener('click', () => {
		let distanceTravelled = 0;
		let plateNumber = document.getElementById('newTruckPlateNumber').value;
		let tireSet = document.getElementById('newTruckTiresCondition').value
			.split(' ').map(Number);
		let truck = { distanceTravelled, plateNumber, tireSet };
		if (!garage.trucks.some(t => t.plateNumber === plateNumber)) {
			garage.trucks.push(truck);
			let truckDivision = document.createElement('div');
			truckDivision.className = 'truck';
			truckDivision.innerHTML = plateNumber;
			trucksLog.appendChild(truckDivision);
		}
	});
	let addTiresButton = document.getElementsByTagName('button')[1];
	addTiresButton.addEventListener('click', () => {
		let tiresCondition = document.getElementById('newTiresCondition').value;
		let tireSet = tiresCondition.split(' ').map(Number);
		garage.tireSets.push(tireSet);
		let tireSetDivision = document.createElement('div');
		tireSetDivision.className = 'tireSet';
		tireSetDivision.innerHTML = tiresCondition;
		tireSetsLog.appendChild(tireSetDivision);
	});
	let workButton = document.getElementsByTagName('button')[2];
	workButton.addEventListener('click', () => {
		let plateNumber = document.getElementById('workPlateNumber').value;
		let truck = garage.trucks.find(t => t.plateNumber === plateNumber);
		if (truck) {
			let distance = Number(document.getElementById('distance').value);
			let wear = Math.ceil(distance / 1000);
			if (truck.tireSet.every(tireCondition => tireCondition >= wear)) {
				for (let tire = 0; tire < truck.tireSet.length; tire++) {
					truck.tireSet[tire] -= wear;
				}
				truck.distanceTravelled += distance;
			} else if (garage.tireSets) {
				truck.tireSet = garage.tireSets.shift();
				tireSetsLog.removeChild(tireSetsLog.children[0]);
				if (truck.tireSet.every(tireCondition => tireCondition >= wear)) {
					for (let tire = 0; tire < truck.tireSet.length; tire++) {
						truck.tireSet[tire] -= wear;
					}
					truck.distanceTravelled += distance;
				}
			}
		}
	});
	let report = document.querySelector('textarea:disabled');
	let endOfShiftButton = document.getElementsByTagName('button')[3];
	endOfShiftButton.addEventListener('click', () => {
		for (let truck of garage.trucks) {
			report.value += `Truck ${truck.plateNumber} has traveled ${truck.distanceTravelled}.\n`;
		}
		report.value += `You have ${garage.tireSets.length} sets of tires left.\n`;
	});
}