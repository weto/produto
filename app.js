var express = require('express');
var app = express();
var i18n = require('./config/i18n')();

app.use(i18n.init);

console.log("Versão Micro API Produto: "+i18n.__("versao"));

var produtos = require('./controller/ProdutoController');
app.use('/api/v1/produtos', produtos);

var swaggerUi = require('swagger-ui-express'),
    doc = require('./doc/swagger.json');

app.use('/', swaggerUi.serve, swaggerUi.setup(doc));

module.exports = app;
