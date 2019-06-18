var gplay = require('google-play-scraper').memoized();

const getAppData = async function(appId) {
  return await gplay.app({appId: appId});
}

export default getAppData;