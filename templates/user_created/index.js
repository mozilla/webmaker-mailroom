module.exports = {
  name: 'New user created',
  description: 'This is send to a user when they first create a Webmaker account',
  tests: [{
    description: 'User jon created an account',
    data: {
      locale: 'en-US',
      username: 'jon'
    }
  }]
}
