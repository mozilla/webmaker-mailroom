var fs = require('fs');
var path = require('path');
var nunjucks = require('nunjucks');

var mailer = require('../index.js')();
var mockData = require('../test/mock-data.js');

function generateHtml(templateName) {
  var tests = mockData[templateName];
  var separator = '\n<hr>\n';
  if (!tests) {
    return console.error('You should add some tests to test/mock-data.js for %s', templateName);
  }
  var html = tests.map(function (data) {
    var email = mailer.render(templateName, data);
    return '\n<h3>\n' + email.subject + '\n</h3>\n' + email.html
  }).join(separator);
  return html;
}

module.exports = function (callback) {
  var files = fs.readdirSync(__dirname + '/../templates');
  var manifest = [];
  files.forEach(function (filename) {
    if (path.extname(filename) !== '.html') {
      return;
    }
    var templateName = path.basename(filename, '.html');
    var html = generateHtml(templateName);
    manifest.push(templateName);
    fs.writeFileSync(__dirname + '/../build/' + templateName + '.html', html);
  });

  var manifestHtml = nunjucks.render('test/manifest-layout.html', {templates: manifest});
  fs.writeFileSync(__dirname +'/../build/index.html', manifestHtml);

  callback();
};

