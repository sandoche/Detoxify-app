var express = require('express');
var router = express.Router();
import getAppData from '../service/appDataService'

/* GET home page. */
router.get('/:appId', async function(req, res, next) {
  const appInfos = await getAppData(req.params.appId);
  res.render('pwa/pwa', { data: appInfos });
});

router.get('/:appId/manifest.json', async function(req, res, next) {
  const appInfos = await getAppData(req.params.appId);
  res.render('pwa/manifest.json', { data: appInfos });
});

router.get('/:appId/service-worker.js', async function(req, res, next) {
  const appInfos = await getAppData(req.params.appId);
  res.render('pwa/service-worker.js', { data: appInfos });
});

module.exports = router;