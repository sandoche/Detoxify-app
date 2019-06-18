import gplay from 'google-play-scraper'

const getResults = async function(query) {
  return await gplay.search({
    term: query,
    num: 3
  });
}

export default getResults;