var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var httpStatus = require('http-status');

const produtos = require('./../produtos.json')

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', function (req, res) {
  res.status(httpStatus.OK).json({ status: httpStatus.OK, produtos: produtos });
});

router.get('/:idProduto', function (req, res) {

  const find = produtos.find(produto => {
    return produto.id = req.params.idProduto;
  })

  res.status(httpStatus.OK).json({ status: httpStatus.OK, produtos: find });
});


module.exports = router;
