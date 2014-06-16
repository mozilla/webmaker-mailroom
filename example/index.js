var express = require('express');
var path = require('path');

var mailer = require('../index.js')();
var app = express();

app.get('/', function (req, res) {
  res.send('To see any of the templates, visit http://localhost:1967/<template-name>');
});

app.get('/:template', function (req, res) {
  var html = mailer.render(req.params.template, {});
  res.send(html);
});

app.listen(1967);
