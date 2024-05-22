const request = require('request');
const cheerio = require('cheerio');

function ScrapePopularTodayAnime() {
  request('https://9anime.com.lv/', (error, response, body) => {
    if (error) return "error"

    const $ = cheerio.load(body);
    const anime = $('.releases.hothome').next('.listupd.normal').find('article');

    const data = [];

    anime.each((_index, element) => {
      const image = $(element).find('img.ts-post-image').attr('src')
      const episodes = $(element).find('.bsx a .limit .bt .epx').text().split('EP')[1].trim()
      const titles = $(element).find('.bsx a .tt').text().trim();
      const type = $(element).find('.bsx a .limit .typez').text();

      data.push({
        titles: titles.replace(/\t/g, '|').split('||||'),
        image,
        episodes: Number(episodes),
        type,
      });
    });

    console.log(data);

  });
}

function ScrapeLatestReleaseAnime(page = 1) {
  request('https://9anime.com.lv/page/' + page, (error, response, body) => {
    if (error) return "error"

    const $ = cheerio.load(body);
    const anime = $('.releases.latesthome').next('.listupd.normal').find('article');

    const data = [];

    anime.each((_index, element) => {
      const image = $(element).find('img.ts-post-image').attr('src')
      const episodes = $(element).find('.bsx a .limit .bt .epx').text().split('EP')[1].trim()
      const titles = $(element).find('.bsx a .tt').text().trim();
      const type = $(element).find('.bsx a .limit .typez').text();

      data.push({
        titles: titles.replace(/\t/g, '|').split('||||'),
        image,
        episodes: Number(episodes),
        type,
      });
    });

    console.log(data)

  });
}

function ScrapeAnimeSearch() {
  return;
}

ScrapeLatestReleaseAnime();
