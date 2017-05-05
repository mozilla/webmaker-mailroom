module.exports = {
  name: 'New user created',
  description: 'This is sent to a user when they first create a Webmaker account.',
  subject: 'Welcome from Mozilla. Let\'s get you started.',
  tests: [{
    description: 'User jon created an account',
    data: {
      locale: 'en-US',
      username: 'jon'
    }
  }]
}
