function solve() {
	let profiles = Array.from(document.getElementsByClassName('profile'));
	profiles.forEach((profile) => {
		let hiddenInfoButton = profile.getElementsByTagName('button')[0];
		hiddenInfoButton.addEventListener('click', () => {
			let profileState = Array.from(profile.getElementsByTagName('input'))
				.filter(i => i.type === 'radio' && i.name.endsWith('Locked') && i.checked)[0];
			let hiddenFieldsContainer = Array.from(profile.getElementsByTagName('div'))
				.filter(div => div.id.endsWith('HiddenFields'))[0];
			if (profileState.value == 'unlock') {
				if (hiddenInfoButton.innerHTML === 'Show more') {
					hiddenFieldsContainer.style.display = 'inline-block';
					hiddenInfoButton.innerHTML = 'Hide it';
				} else {
					hiddenFieldsContainer.style.display = 'none';
					hiddenInfoButton.innerHTML = 'Show more';
				}
			}
		});
	});
}