const request = require('request');
const cheerio = require('cheerio');

request('https://boxnovel.com/novel/page/3', (error, response, body) => {
	if (error && response.statusCode !== 2000) return 'error';

	const $ = cheerio.load(body);
	const novel = $('.page-listing-item').find('.page-item-detail');

	const data = [];

	novel.each((i, el) => {
		const rating = $(el)
			.find('.post-total-rating')
			.text();

		const title = $(el)
			.find('h3 a')
			.text();

		const image = $(el)
			.find('.item-thumb a img.effect-fade')
			.attr('data-src')

		const width = $(el)
			.find('.item-thumb a img.effect-fade')
			.attr('width')

		const height = $(el)
			.find('.item-thumb a img.effect-fade')
			.attr('height')

		data.push({ rating, title, image: { width, height, poster: image } });
	});

	console.log(data)

})
