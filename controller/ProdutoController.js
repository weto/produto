var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var httpStatus = require('http-status');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', function (req, res) {
  res.status(httpStatus.OK).json({ status: httpStatus.OK, produtos: [] });
});

module.exports = router;
