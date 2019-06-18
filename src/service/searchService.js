var gplay = require('google-play-scraper').memoized();

const getResults = async function(query) {
  return await gplay.search({
    term: query,
    num: 3
  });
}

export default getResults;