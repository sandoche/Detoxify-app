import gplay from 'google-play-scraper'

const getResults = async function(query) {
  return await gplay.search({
    term: query,
    num: 5
  });
}

export default getResults;