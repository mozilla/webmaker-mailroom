var fs = require('fs');
var path = require('path');
var nunjucks = require('nunjucks');

var mailer = require('../index.js')();
var mockData = require('../test/mock-data.js');

function generateHtml(templateName, metaData) {
  var tests = metaData.tests;
  var separator = '\n<hr>\n';
  var html = '<h1>' + metaData.name + '</h1>\n' +
    '<p>' + metaData.description + '</p>\n<hr>\n' +
    tests.map(function (test) {
    var email = mailer.render(templateName, test.data);
    return'<h3>Test case: ' + test.description + '</h3>\n' +
      '\n<h4>Subject: ' + email.subject + '</h4>\n' +
      email.html;
  }).join(separator);
  return html;
}

module.exports = function (callback) {
  var templatesDir = __dirname + '/../templates';
  var files = fs.readdirSync(templatesDir);
  var manifest = [];

  files.forEach(function (dir) {
    var stats = fs.statSync(path.join(templatesDir, dir));
    if (!stats.isDirectory()) {
      return;
    }
    var templateName = dir;
    var metaData = require(templatesDir + '/' + templateName);
    var html = generateHtml(templateName, metaData);
    manifest.push({
      metaData: metaData,
      path: templateName + '.html'
    });
    fs.writeFileSync(__dirname + '/../build/' + templateName + '.html', html);
  });

  var manifestHtml = nunjucks.render('test/manifest-layout.html', {templates: manifest});
  fs.writeFileSync(__dirname +'/../build/index.html', manifestHtml);

  callback();
};

