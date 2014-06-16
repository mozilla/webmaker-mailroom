var assert = require('assert')
var mailer = require('../index.js')();

describe('webmaker-mailroom', function() {
  describe('#render', function() {

    it('should render "test"', function() {
      var output = mailer.render('test', { number: '123' });
      assert.equal(output, '<p>This is a test 123</p>\n');
    });

  });

});
