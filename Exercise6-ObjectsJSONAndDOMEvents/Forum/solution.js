function solve() {
	let tableBody = document.getElementsByTagName('tbody')[0];
	let buttons = Array.from(document.getElementsByTagName('button'));
	let submitButton = buttons.filter(b => b.textContent === 'Submit')[0];
	submitButton.addEventListener('click', (event) => {
		event.preventDefault();
		let userInfo = document.getElementsByClassName('user-info')[0];
		let username = userInfo.querySelector('input[placeholder="username"]').value;
		let email = userInfo.querySelector('input[placeholder="email"]').value;
		let topics = Array.from(document.querySelectorAll('.topics input[type="checkbox"]:checked'))
			.map(checkbox => checkbox.value);
		let tableRow = document.createElement('tr');
		let usernameCell = document.createElement('td');
		usernameCell.textContent = username;
		tableRow.appendChild(usernameCell);
		let emailCell = document.createElement('td');
		emailCell.textContent = email;
		tableRow.appendChild(emailCell);
		let topicsCell = document.createElement('td');
		topicsCell.textContent = topics.join(' ');
		tableRow.appendChild(topicsCell);
		tableBody.appendChild(tableRow);
	});
	let searchButton = buttons.filter(b => b.textContent === 'Search')[0];
	searchButton.addEventListener('click', () => {
		let searchTerm = document.querySelector('input[placeholder="Search..."]').value;
		let tableRows = Array.from(tableBody.querySelectorAll('tr'));
		if (searchTerm) {
			for (let row of tableRows) {
				row.style.visibility = 'hidden';
				for (let cell of Array.from(row.children)) {
					if (cell.textContent.includes(searchTerm)) {
						cell.parentElement.style.visibility = 'visible';
						break;
					}
				}
			}
		} else tableRows.forEach(row => row.style.visibility = 'visible');
	});
}