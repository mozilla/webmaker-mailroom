var assert = require('assert')
var mailer = require('../index.js')();
var data = require('./mock-data.js');

describe('webmaker-mailroom', function() {
  describe('#render', function() {

    it('should render "test"', function() {
      var output = mailer.render('test', data.test[0]);
      assert.equal(output.html, '<p>This is a test 123</p>\n');
      assert.equal(output.subject, 'This is a test');
    });

    it('should render "event_mentor_confirmation_email"', function() {
      var output = mailer.render('event_mentor_confirmation_email', data.event_mentor_confirmation_email[0]);
      var output2 = mailer.render('event_mentor_confirmation_email', data.event_mentor_confirmation_email[1]);
      assert(output.html);
      assert(output.subject);
      assert(output2.html);
      assert(output2.subject);
    });

    it('should render "hive_badge_awarded"', function() {
      var output = mailer.render('hive_badge_awarded', data.hive_badge_awarded[0]);
      var output2 = mailer.render('hive_badge_awarded', data.hive_badge_awarded[1]);
      assert(output.html);
      assert(output.subject);
      assert(output2.html);
      assert(output2.subject);
    });

    it('should render "badge_application_denied"', function() {
      var output = mailer.render('badge_application_denied', data.badge_application_denied[0]);
      assert(output.html);
      assert(output.subject);
    });

    it('should render "event_coorganizer_added"', function() {
      var output = mailer.render('event_coorganizer_added', data.event_coorganizer_added[0]);
      assert(output.html);
      assert(output.subject);
    });

    it('should render "event_created"', function() {
      var output = mailer.render('event_created', data.event_created[0]);
      assert(output.html);
      assert(output.subject);
    });

    it('should render "remind_user_about_event"', function() {
      var output = mailer.render('remind_user_about_event', data.remind_user_about_event[0]);
      assert(output.html);
      assert(output.subject);
    });

    it('should render "notify_mofo_staff_new_event"', function() {
      var output = mailer.render('notify_mofo_staff_new_event', data.notify_mofo_staff_new_event[0]);
      assert(output.html);
      assert(output.subject);
    });

    it('should render "user_created"', function() {
      var output = mailer.render('user_created', data.user_created[0]);
      assert(output.html);
      assert(output.subject);
    });

    it('should render "login_request"', function() {
      var output = mailer.render('login_request', data.user_created[0]);
      assert(output.html);
      assert(output.subject);
    });

  });

});
