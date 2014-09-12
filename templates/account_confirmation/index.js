module.exports = {
  name: 'Account Confirmation',
  description: 'This email is sent to a user when they try to log in to Webmaker for the first time',
  subject: 'Webmaker Account Confirmation',
  tests: [
    {
      description: 'cade is logging in for the first time.',
      data: {
        token: 'kakav-nufuk',
        username: 'cade'
      }
    }
  ]
};
