function solve() {
	let correctAnswers = {
		'When SoftUni was created?': 2013,
		'Which is the most popular name in the SoftUni?': 'Pesho',
		'Which of the following names is the founder of the SoftUni?': 'Nakov'
	};
	let correctAnswersCount = 0;
	let result = document.getElementById('result');
	let questions = Array.from(document.getElementsByTagName('section'));
	for (let i = 0; i < questions.length; i++) {
		let question = questions[i].getElementsByTagName('h1')[0].innerHTML;
		let answerButton = questions[i].getElementsByTagName('button')[0];
		answerButton.addEventListener('click', function handler(event) {
			let answer = Array.from(questions[i].getElementsByTagName('input'))
				.filter(input => input.type === 'radio' && input.checked)[0].value;
			if (answer) {
				if (answer == correctAnswers[question]) correctAnswersCount++;
				if (answerButton.innerHTML.toUpperCase().includes('NEXT')) {
					questions[i + 1].style.display = 'block';
				} else {
					if (correctAnswersCount === questions.length) {
						result.innerHTML = 'You are recognized as top SoftUni fan!';
					} else {
						result.innerHTML = `You have ${correctAnswersCount} right answers`;
					}
				}
				Array.from(questions[i].getElementsByTagName('input'))
					.forEach(input => input.toggleAttribute('disabled'));
				event.currentTarget.removeEventListener(event.type, handler);
			}
		});
	}
}