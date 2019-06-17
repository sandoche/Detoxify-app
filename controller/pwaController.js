var express = require('express');
var router = express.Router();
import getAppData from '../service/appDataService'

/* GET home page. */
router.get('/:appId', async function(req, res, next) {
  const appInfos = await getAppData(req.params.appId);
  res.render('pwa/pwa', { data: appInfos });
});

router.get('/:appId/manifest\.json', async function(req, res, next) {
  const appInfos = await getAppData(req.params.appId);
  res.set('Content-Type', 'application/json');
  res.render('pwa/manifest', { data: appInfos });
});

router.get('/:appId/service-worker\.js', function(req, res, next) {
  res.set('Content-Type', 'application/javascript');
  res.render('pwa/service-worker', { appId: req.params.appId });
});

module.exports = router;