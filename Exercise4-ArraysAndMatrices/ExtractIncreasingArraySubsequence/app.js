function ExtractIncreasingArraySubsequence(array) {
	let extract = [array[0]];
	array.filter((num, i) => i > 0 && num >= extract[extract.length - 1] ? extract.push(num) : false);
	extract.forEach(num => console.log(num));
}

ExtractIncreasingArraySubsequence([1, 3, 8, 4, 10, 12, 3, 2, 12, 24]);
ExtractIncreasingArraySubsequence([1, 2, 3, 4]);
ExtractIncreasingArraySubsequence([20, 3, 2, 15, 6, 1]);
