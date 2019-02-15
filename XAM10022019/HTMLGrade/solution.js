function htmlGrade(examScore, homeworkDone, homeworkAll) {
	if (examScore === 400) return Number(6).toFixed(2);
	let examPoints = examScore / 400 * 90;
	let homeworkPoints = homeworkDone / homeworkAll * 10;
	let totalPoints = examPoints + homeworkPoints;
	let grade = 3 + 2 * (totalPoints - 20) / 50;
	if (grade > 6) return Number(6).toFixed(2);
	if (grade < 3) return Number(2).toFixed(2);
	return grade.toFixed(2);
}

htmlGrade(33, 10, 10);
htmlGrade(399, 10, 10);
htmlGrade(300, 10, 10);
htmlGrade(200, 5, 5);
