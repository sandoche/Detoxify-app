var express = require('express');
var router = express.Router();
import config from '../config.js'

router.get('/', function(req, res, next) {
  const protocol = req.connection.encrypted ? 'https' : 'http';
  const fullUrl = protocol + '://' + req.get('host') + req.originalUrl;
  res.render('index', { config, url: fullUrl });
});

module.exports = router;
