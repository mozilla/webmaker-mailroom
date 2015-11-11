var fs = require('fs');
var path = require('path');
var nunjucks = require('nunjucks');

var mailer = require('../index.js')();

function generateHtml(templateName, metaData) {
  var tests = metaData.tests;
  var emails = tests.map(function (test) {
    var options = {
      locale: test.locale,
      partial: true
    };

    var email = mailer.render(templateName, test.data, options);
    email.test = test;
    return email;
  });
  var html = nunjucks.render('test/fixtures/test-layout.html', {
    data: metaData,
    emails: emails
  });
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

  var manifestHtml = nunjucks.render('test/fixtures/manifest-layout.html', {templates: manifest});
  fs.writeFileSync(__dirname +'/../build/index.html', manifestHtml);

  callback();
};

