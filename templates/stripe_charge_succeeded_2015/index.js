module.exports = {
  // Choose a human-readable name. This is just for rendering example pages.
  name: 'Stripe Charge Succeeded (2015)',

  // Choose a good description; when is this email sent?
  description: 'Email sent after successfully processing a Stripe payment',

  // Choose a subject for your email
  subject: 'Thank you for your gift to Mozilla',
  recurringSubject: 'Thank you for your recurring donation to Mozilla.',

  // Create a test case for every possible version of the email,
  // E.g. with a user name, without a username
  tests: [
    {
      description: 'A donor donates $20 CAD one-time',
      data: {
        amount: 'CA$20',
        recurring_donation: false,
        transaction_id: 'ch_fakeid',
        timestamp: '2015-11-09T21:01:13.000Z',
        livemode: true
      }
    }, {
      description: 'A donor donates $10 USD recurring',
      data: {
        amount: '$10',
        recurring_donation: true,
        transaction_id: 'ch_fakeid',
        timestamp: '2015-11-09T21:01:13.000Z',
        livemode: false
      }
    }
  ]
};
