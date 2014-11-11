module.exports = {
  name: 'Login Request',
  description: 'This email is sent to a user when they try to log in to Webmaker.',
  subject: 'Webmaker Login Request',
  tests: [
    {
      description: 'cade has requested a login token',
      data: {
        token: 'kakav-nufuk',
        username: 'cade',
        loginUrl: 'https://login.webmaker.org/?uid=cade&token=kakav-nufuk'
      }
    }
  ]
};
