module.exports = {
  // Choose a human-readable name. This is just for rendering example pages.
  name: 'Stripe Charge Succeeded (2014)',

  // Choose a good description; when is this email sent?
  description: 'Email sent after successfully processing a Stripe payment',

  // Choose a subject for your email
  subject: 'stripe_charge_succeeded_2014_subject',

  // Create a test case for every possible version of the email,
  // E.g. with a user name, without a username
  tests: [
    {
      locale: 'en-US',
      description: 'An en-US donor donates $10 USD',
      data: {
        name: 'Jon Buckley',
        amount: '$10',
        transaction_id: 'ch_fakeid',
        address: '366 Adelaide St W',
        city: 'Toronto',
        state: 'ON',
        zipcode: 'M5V 1R9',
        country: 'Canada'
      }
    }, {
      locale: 'de',
      description: 'A de donor donates €10 EUR',
      data: {
        name: 'Jon Buckley',
        amount: '€10',
        transaction_id: 'ch_fakeid',
        address: 'Voltastraße 5, Haus 10, Treppe 6',
        city: 'Berlin',
        zipcode: '13355',
        country: 'Germany'
      }
    }
  ]
};
