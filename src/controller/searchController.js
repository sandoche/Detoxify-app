var express = require('express');
var router = express.Router();
import getResults from '../service/searchService';

router.get('/', async function(req, res, next) {
  const results = await getResults(req.query.q);
  res.json(results);
});

module.exports = router;
