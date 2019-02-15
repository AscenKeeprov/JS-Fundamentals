function AddRemoveArrayElements(commands) {
	let number = 1;
	let array = [];
	for (let command of commands) {
		if (command.toUpperCase() === 'ADD') array.push(number++);
		if (command.toUpperCase() === 'REMOVE') array.pop(number++);
	}
	if (array.length > 0) {
		array.forEach(element => console.log(element));
	} else console.log('Empty');
}

AddRemoveArrayElements(['add', 'add', 'add', 'add']);
AddRemoveArrayElements(['add', 'add', 'remove', 'add', 'add']);
AddRemoveArrayElements(['remove', 'remove', 'remove']);
AddRemoveArrayElements(['remove', 'add', 'add', 'remove']);
AddRemoveArrayElements(['remove', 'add', 'add', 'remove', 'add']);
