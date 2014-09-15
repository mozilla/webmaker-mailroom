var should = require('should');
var bulk = require('bulk-require');

var mailer = require('../index.js')();
var metaData = bulk(__dirname + '/../templates', '**/index.js');

describe('webmaker-mailroom', function() {
  describe('#render', function() {
    it('should exist', function () {
      mailer.render.should.be.ok;
    });
    it('should render template and data', function() {
      var result = mailer.render('test', {number: 42}, {});
      result.should.have.property('subject', 'This is a test');
      result.should.have.property('html');
      should(result.html.match('This is a test 42')).be.ok;
    });
    it('should render partial html', function () {
      var result = mailer.render('test', {number: 42}, {partial: true});
      result.html.should.equal('<p>This is a test 42</p>\n');
    });
  });

  function makeTest(id) {
    describe('#' + id, function() {
      var data = metaData[id].index;
      it('should have a name', function () {
        data.name.should.be.a.String;
      });
      it('should have a description', function () {
        data.description.should.be.a.String;
      });
      it('should have an array of tests', function () {
        data.tests.should.be.an.instanceof(Array);
        data.tests.length.should.be.greaterThan(0);
      });
      it('should have a description and data for each test', function() {
        data.tests.forEach(function (test) {
          test.description.should.be.a.String;
          test.data.should.be.an.Object.and.should.not.be.an.instanceof(Array);
        });
      });
      data.tests.forEach(function (test) {
        it('should render when ' + test.description, function() {
          var output = mailer.render(id, test.data);
          output.html.should.be.a.String;
          output.subject.should.be.a.String;
        });
      });
    });
  }

  for (var id in metaData) {
    makeTest(id);
  }

});
