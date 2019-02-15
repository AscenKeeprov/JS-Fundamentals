function tableFilter(table, command) {
	let commandArgs = command.split(' ');
	let action = commandArgs[0];
	let columnHeader = commandArgs[1];
	let columnIndex = table[0].indexOf(columnHeader);
	switch (action.toUpperCase()) {
		case 'HIDE':
			for (let row of table) row.splice(columnIndex, 1);
			break;
		case 'SORT':
			let headerRow = table.shift()
			table.sort((a, b) => {
				if (a[columnIndex] === b[columnIndex]) return 0;
				if (a[columnIndex] < b[columnIndex]) return -1;
				if (a[columnIndex] > b[columnIndex]) return 1;
			});
			table.splice(0, 0, headerRow);
			break;
		case 'FILTER':
			let filterValue = commandArgs[2];
			let filteredTable = [table[0]];
			for (let rowIndex = 0; rowIndex < table.length; rowIndex++) {
				if (table[rowIndex][columnIndex] === filterValue)
					filteredTable.push(table[rowIndex]);
			}
			table = filteredTable;
			break;
	}
	for (let row of table) console.log(row.join(' | '));
}

tableFilter(
	[['name', 'age', 'grade'],
	['Peter', '25', '5.00'],
	['George', '34', '6.00'],
	['Marry', '28', '5.49']],
	'sort name');
tableFilter(
	[['firstName', 'age', 'grade', 'course'],
	['Peter', '25', '5.00', 'JS-Core'],
	['George', '34', '6.00', 'Tech'],
	['Marry', '28', '5.49', 'Ruby']],
	'filter firstName Marry');