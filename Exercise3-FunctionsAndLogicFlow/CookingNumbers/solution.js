function solve() {
	let input = document.querySelector('#exercise input[type="number"]');
	let output = document.getElementById('output');
	function getCurrentNumber() {
		return Number(output.textContent) || Number(input.value);
	}
	let actions = {
		'bake': () => output.textContent = getCurrentNumber() * 3,
		'chop': () => output.textContent = getCurrentNumber() / 2,
		'dice': () => output.textContent = Math.sqrt(getCurrentNumber()),
		'fillet': () => output.textContent = getCurrentNumber() * 0.8,
		'spice': () => output.textContent = getCurrentNumber() + 1,
	}
	Array.from(document.querySelectorAll('#operations button'))
		.forEach((button) => {
			let action = actions[button.textContent.toLowerCase()];
			button.addEventListener('click', action);
		});
}