module.exports = {
  // Choose a human-readable name. This is just for rendering example pages.
  name: 'Stripe Charge Succeeded (2015)',

  // Choose a good description; when is this email sent?
  description: 'Email sent after successfully processing a Stripe payment',

  // Choose a subject for your email
  subject: 'Thank you for your gift to Mozilla',

  // Create a test case for every possible version of the email,
  // E.g. with a user name, without a username
  tests: [
    {
      description: 'A donor donates $20 CAD one-time',
      data: {
        name: 'Jon Buckley',
        amount: 'CA$20',
        recurring_donation: false,
        address: '366 Adelaide St W',
        city: 'Toronto',
        state: 'ON',
        zipcode: 'M5V 1R9',
        country: 'Canada'
      }
    }, {
      description: 'A donor donates $10 USD recurring',
      data: {
        name: 'Jon Buckley',
        amount: '$10',
        recurring_donation: true,
        address: '366 Adelaide St W',
        city: 'Toronto',
        state: 'ON',
        zipcode: 'M5V 1R9',
        country: 'Canada'
      }
    }
  ]
};
