var assert = require('assert')
var mailer = require('../index.js')();
var data = require('./mock-data.js');

describe('webmaker-mailroom', function() {
  describe('#render', function() {

    it('should render "test"', function() {
      var output = mailer.render('test', data.test);
      assert.equal(output, '<p>This is a test 123</p>\n');
    });

    it('should render "event_mentor_confirmation_email"', function() {
      var output = mailer.render('event_mentor_confirmation_email', data.event_mentor_confirmation_email)[0];
      var output2 = mailer.render('event_mentor_confirmation_email', data.event_mentor_confirmation_email)[1];
      assert(output);
      assert(output2);
    });

  });

});
