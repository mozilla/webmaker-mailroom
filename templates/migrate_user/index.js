module.exports = {
  name: 'Migrate User',
  description: 'This email is sent when a user tries to log into id.webmaker.org, but has not created a password',
  subject: 'Set up your new Webmaker account password',
  tests: [
    {
      description: 'a user is migrating to id.wmo',
      data: {
        token: 'kakav-nufuk',
        username: 'cade',
        migrateUrl: 'http://id.webmaker.org/migrate?uid=cade&token=kakav-nufuk&client_id=test&scopes=test&state=test&response_type=code'
      }
    }
  ]
};
