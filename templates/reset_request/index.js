module.exports = {
  name: 'Reset Request',
  description: 'This email is sent to a user when they try to reset their Webmaker Password',
  subject: 'Reset Your Webmaker Password',
  tests: [
    {
      description: 'cade has requested a password reset',
      data: {
        resetUrl: "http://localhost:7777/?uid=cade&resetCode=reallyreallylongpasswordresetcode"
      }
    }
  ]
};
