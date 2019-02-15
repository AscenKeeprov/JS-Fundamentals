function solve() {
	let content = document.getElementById('content');
	let steps = Array.from(content.getElementsByTagName('div'))
		.filter(div => div.id.toLowerCase().endsWith('step'));
	let buttons = Array.from(document.getElementById('buttons').children);
	let nextButton = buttons.filter(b => b.innerHTML.toUpperCase().includes('NEXT'))[0];
	let cancelButton = buttons.filter(b => b.innerHTML.toUpperCase().includes('CANCEL'))[0];
	function displayStep(step) {
		steps.forEach(s => s === step
			? s.style.display = 'block'
			: s.removeAttribute('style'));
	}
	function hideAndDisable(element) {
		element.setAttribute('disabled', 'disabled');
		element.style.display = 'none';
	}
	cancelButton.addEventListener('click', () => {
		content.parentElement.style.display = 'none';
		displayStep(undefined);
	});
	nextButton.addEventListener('click', (event) => {
		content.style.backgroundImage = 'none';
		let currentStep = steps.filter(s => window.getComputedStyle(s).display !== 'none')[0];
		let currentStepId = steps.indexOf(currentStep);
		switch (currentStepId) {
			case 1:
				hideAndDisable(event.currentTarget);
				cancelButton.textContent = 'Finish';
			case 0:
				let licenseAgreement = document.querySelector('input[name="license"]:checked');
				if (licenseAgreement.value.toLowerCase() === 'disagree') return;
				hideAndDisable(event.currentTarget);
			default:
				let nextStep = steps[currentStepId + 1];
				if (nextStep) {
					displayStep(nextStep);
					if (steps.indexOf(nextStep) === 1) {
						setTimeout(() => {
							nextButton.removeAttribute('disabled');
							nextButton.style.display = 'inline-block';
						}, 3000);
					}
				}
				break;
		}
	});
}