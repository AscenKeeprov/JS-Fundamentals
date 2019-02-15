function EvenNumbers1ToN(n) {
	for (let i = 2; i <= n; i += 2) {
		if (i % 2 === 0) {
			console.log(i);
		}
	}
}

EvenNumbers1ToN(1024);
