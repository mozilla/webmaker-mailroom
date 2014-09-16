module.exports = {
  // Choose a human-readable name. This is just for rendering example pages.
  name: '',

  // Choose a good description; when is this email sent?
  description: '',

  // Choose a subject for your email
  subject: '',

  // Create a test case for every possible version of the email,
  // E.g. with a user name, without a username
  tests: [
    {
      description: 'a user creates an account',
      data: {
        username: 'samus'
      }
    }
  ]
};
