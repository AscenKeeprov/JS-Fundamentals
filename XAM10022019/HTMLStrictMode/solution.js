function htmlStrictMode(html) {
	const outerHtmlPattern = /^(<(\w+)>)(.*)(<\/\2>)$/g;
	const innerHtmlPattern = /([^<>]*)(<.+>)([^>]*)/g;
	let htmlText = '';
	for (let line of html) {
		let lineText = ['', ''];
		let outerHtml = outerHtmlPattern.exec(line);
		outerHtmlPattern.lastIndex = 0;
		while (outerHtml) {
			let innerHtml = outerHtml[3];
			let innerHtmlParts = innerHtmlPattern.exec(innerHtml);
			innerHtmlPattern.lastIndex = 0;
			if (innerHtmlParts) {
				lineText[0] += innerHtmlParts[1];
				lineText[1] += innerHtmlParts[3];
				outerHtml = outerHtmlPattern.exec(innerHtmlParts[2]);
				outerHtmlPattern.lastIndex = 0;
			} else {
				lineText[0] += innerHtml;
				break;
			}
		}
		htmlText += `${lineText.join('')} `;
	}
	console.log(htmlText.trim());
}

htmlStrictMode(
	['<div><div>This</div> is</div>',
		'<div><a>perfectly</a></div>',
		'<divs><p>valid</p></divs>',
		'<div><p>This</div></p>',
		'<div><p>is not</p><div>']);
htmlStrictMode(
	['<h1><span>Hello World!</span></h1>',
		'<p>I am Peter.']);