var should = require('should');
var bulk = require('bulk-require');

var mailer = require('../index.js')();
var metaData = bulk(__dirname + '/../templates', '**/index.js');
var generatorData = require('../gulp/generator');

describe('webmaker-mailroom', function() {
  describe('#render', function() {
    it('should exist', function () {
      should(mailer.render).be.ok;
    });
    it('should render template and data', function() {
      var result = mailer.render('test', {number: 42}, {});
      should(result).have.property('subject', 'This is a test');
      should(result).have.property('html');
      should(result.html.match('This is a test 42')).be.ok;
    });
    it('should render partial html', function () {
      var result = mailer.render('test', {number: 42}, {partial: true});
      should(result.html).equal('<div>\n  <p>This is a test 42</p>\n</div>\n');
    });
  });

  function makeTest(id, isGenerator) {
    describe('#' + id, function() {
      var data;
      var options;
      if (isGenerator) {
        data = generatorData;
        options = {dir: 'gulp'}
      } else {
        data = metaData[id].index;
      }
      it('should have a name', function () {
        should(data.name).be.a.String;
        if (!isGenerator) data.name.should.be.ok;
      });
      it('should have a description', function () {
        should(data.description).be.a.String;
        if (!isGenerator) data.description.should.be.ok;
      });
      it('should have a subject', function () {
        should(data.subject).be.a.String;
        if (!isGenerator) data.subject.should.be.ok;
      });
      it('should have an array of tests', function () {
        should(data.tests).be.an.instanceof(Array);
        should(data.tests.length).be.greaterThan(0);
      });
      it('should have a description and data for each test', function() {
        data.tests.forEach(function (test) {
          should(test.description).be.a.String;
          should(test.data).be.an.Object;
          test.data.should.not.be.an.instanceof(Array);
        });
      });
      data.tests.forEach(function (test) {
        it('should render when ' + test.description, function() {
          var output = mailer.render(id, test.data, options);
          should(output).be.an.Object;
          should(output.html).be.a.String;
          output.html.should.be.ok;
          should(output.subject).be.a.String;
          if (!isGenerator) output.subject.should.be.ok;
        });
      });
    });
  }

  for (var id in metaData) {
    makeTest(id);
  }

  // Template
  makeTest('generator', generatorData, true);
});
