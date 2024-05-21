const fetch = require('./fetch.js')

async function main() {
	const response = await fetch('https://google.com');
	const body = await response.text();

	console.log(body)
}

main()
