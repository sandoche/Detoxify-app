var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pwa/pwa', { title: 'PWA' });
});

router.get('/manifest.json', function(req, res, next) {
  res.render('pwa/manifest.json');
});

router.get('/service-worker.js', function(req, res, next) {
  res.render('pwa/service-worker.js');
});

module.exports = router;