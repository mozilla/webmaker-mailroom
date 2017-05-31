module.exports = {
  // Choose a human-readable name. This is just for rendering example pages.
  name: 'Large Stripe Charge',

  // Choose a good description; when is this email sent?
  description: 'A large, possibly fraudulent stripe charge was generated on donate.mozilla.org',

  // Choose a subject for your email
  subject: 'donate.mozilla.org - A large Stripe charge was generated',

  // Create a test case for every possible version of the email,
  // E.g. with a user name, without a username
  tests: [
    {
      locale: 'en-US',
      description: 'large charge',
      data: {
        amount: '500.00',
        charge_id: "ch_0000000000"
      }
    }
  ]
};
