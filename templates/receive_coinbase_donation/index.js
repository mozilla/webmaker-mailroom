module.exports = {
  // Choose a human-readable name. This is just for rendering example pages.
  name: 'Receive Coinbase donation',

  // Choose a good description; when is this email sent?
  description: 'Email sent to user when we receive a Coinbase donation',

  // Choose a subject for your email
  subject: 'receive_coinbase_donation_subject',

  // Create a test case for every possible version of the email,
  // E.g. with a user name, without a username
  tests: [
    {
      description: 'a person donates bitcoin via Coinbase',
      data: {
        email: 'user@webmaker.org',
        bitcoin_amount: '0.001268',
        usd_amount: '0.50',
        transaction_date: '2014-11-14T12:40:34-08:00',
        transaction_id: '1A2B3C4D'
      }
    }
  ]
};
