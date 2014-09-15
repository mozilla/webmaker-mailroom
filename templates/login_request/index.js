module.exports = {
  name: 'Login Request',
  description: 'This email is sent to a user when they try to log in to Webmaker.',
  tests: [
    {
      description: 'cade has requested a login token',
      data: {
        token: 'asdf123',
        username: 'cade'
      }
    }
  ]
};
