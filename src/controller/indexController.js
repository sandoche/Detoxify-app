var express = require('express');
var router = express.Router();
import config from '../config.js'

router.get('/', function(req, res, next) {
  res.render('index', { config });
});

module.exports = router;
