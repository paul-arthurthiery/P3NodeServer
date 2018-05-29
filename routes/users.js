var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', (req, res, next) => {
  res.status(200).send('respond with a resource');
});

module.exports = router;
