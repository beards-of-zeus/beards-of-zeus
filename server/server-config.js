var express = require('express');

var app = express();

app.set('view engine', 'html');
app.use('/', express.static('./public'));

module.exports = app;