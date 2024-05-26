const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const newPage = await browser.newPage();

	await newPage.goto('https://github.com/');
	
	await browser.close();
})();
