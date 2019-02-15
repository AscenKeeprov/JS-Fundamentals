function SortArrayByTwoCriteria(array) {
	array.sort((a, b) => a.length - b.length || a.toLowerCase() > b.toLowerCase());
	array.forEach(element => console.log(element));
}

SortArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
SortArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
SortArrayByTwoCriteria(['test', 'Default', 'Deny', 'omen']);
