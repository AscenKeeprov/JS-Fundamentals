function solve() {
	let tableRows = Array.from(document.querySelectorAll('tbody > tr'))
	let tableCells = Array.from(document.querySelectorAll('tbody > tr > td'));
	let searchField = document.getElementById('searchField');
	let searchButton = document.getElementById('searchBtn');
	searchButton.addEventListener('click', () => {
		tableRows.forEach(row => row.removeAttribute('class'));
		let searchTerm = searchField.value.trim();
		if (searchTerm) {
			tableCells.forEach((cell) => {
				if (cell.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
					cell.parentElement.className = 'select';
				}
			});
			searchField.value = '';
		}
	});
}