import gplay from 'google-play-scraper'

const getAppData = async function(appId) {
  return await gplay.app({appId: appId});
}

export default getAppData;