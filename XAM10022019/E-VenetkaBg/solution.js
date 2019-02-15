function eVenetkaBg(vignettes) {
	let towns = [];
	for (let vignette of vignettes) {
		if (!towns.some(t => t.name === vignette.town)) {
			towns.push({
				name: vignette.town,
				vignettesRegistered: 1,
				profit: vignette.price
			});
		} else {
			let town = towns.find(t => t.name === vignette.town);
			town.vignettesRegistered++;
			town.profit += vignette.price;
		}
	}
	towns.sort((t1, t2) => {
		if (t1.profit < t2.profit) return 1;
		if (t1.profit > t2.profit) return -1;
		if (t1.vignettesRegistered < t2.vignettesRegistered) return 1;
		if (t1.vignettesRegistered > t2.vignettesRegistered) return -1;
		return t1.name.localeCompare(t2.name);
	});
	let modelsInMostProfitableTown = [];
	let vignettesInMostProfitableTown = vignettes.filter(v => v.town === towns[0].name);
	for (let vignette of vignettesInMostProfitableTown) {
		if (!modelsInMostProfitableTown.some(m => m.name === vignette.model)) {
			modelsInMostProfitableTown.push({
				name: vignette.model,
				count: 1,
				highestVignettePrice: vignette.price
			});
		} else {
			let model = modelsInMostProfitableTown.find(m => m.name === vignette.model);
			model.count++;
			model.highestVignettePrice = Math.max(model.highestVignettePrice, vignette.price);
		}
	}
	modelsInMostProfitableTown.sort((m1, m2) => {
		if (m1.count < m2.count) return 1;
		if (m1.count > m2.count) return -1;
		if (m1.highestVignettePrice < m2.highestVignettePrice) return 1;
		if (m1.highestVignettePrice > m2.highestVignettePrice) return -1;
		return m1.name.localeCompare(m2.name);
	});
	let vignettesForMostDrivenModelInMostProfitableTown = vignettes
		.filter(v => v.model == modelsInMostProfitableTown[0].name);
	let townsWithMostDrivenModel = [];
	for (let vignette of vignettesForMostDrivenModelInMostProfitableTown) {
		if (!townsWithMostDrivenModel.some(t => t.name === vignette.town)) {
			townsWithMostDrivenModel.push({
				name: vignette.town,
				registrationNumbers: [vignette.regNumber]
			});
		} else {
			let town = townsWithMostDrivenModel.find(t => t.name === vignette.town);
			town.registrationNumbers.push(vignette.regNumber);
		}
	}
	townsWithMostDrivenModel.sort((t1, t2) => t1.name.localeCompare(t2.name));
	console.log(`${towns[0].name} is most profitable - ${towns[0].profit} BGN`);
	console.log(`Most driven model: ${modelsInMostProfitableTown[0].name}`);
	for (let town of townsWithMostDrivenModel) {
		town.registrationNumbers.sort((rn1, rn2) => rn1.localeCompare(rn2));
		console.log(`${town.name}: ${town.registrationNumbers.join(', ')}`);
	}
}

eVenetkaBg(
	[{ model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2 },
	{ model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8 },
	{ model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9 },
	{ model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3 },
	{ model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3 }]);
eVenetkaBg(
	[{ model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2 },
	{ model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 6 },
	{ model: 'Tesla', regNumber: 'CHUK', town: 'Burgas', price: 5 },
	{ model: 'Mercedes', regNumber: 'S1', town: 'Sozopol', price: 9 },
	{ model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 4 },
	{ model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3 },
	{ model: 'Lada', regNumber: 'SAMARA', town: 'Burgas', price: 2 },
	{ model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3 },
	{ model: 'Lada', regNumber: 'B2083HK', town: 'Varna', price: 1 },
	{ model: 'Lada', regNumber: 'JIGULA', town: 'Burgas', price: 5 }]);