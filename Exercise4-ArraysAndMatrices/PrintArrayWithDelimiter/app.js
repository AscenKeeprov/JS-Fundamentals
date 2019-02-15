function PrintArrayWithDelimiter(array) {
	let delimiter = array.pop();
	console.log(array.join(delimiter));
}

PrintArrayWithDelimiter(['One', 'Two', 'Three', 'Four', 'Five', '-']);
PrintArrayWithDelimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']);
