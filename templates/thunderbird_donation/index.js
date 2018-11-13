module.exports = {
  // Choose a human-readable name. This is just for rendering example pages.
  name: 'Thunderbird Donation',

  // Choose a good description; when is this email sent?
  description: 'Sent when a donation to thunderbird is made',

  // Choose a subject for your email
  subject: 'Thank you for your gift to Mozilla Thunderbird',
  recurringSubject: 'Thank you for your recurring gift to Mozilla Thunderbird',

  // Create a test case for every possible version of the email,
  // E.g. with a user name, without a username
  tests: [
    {
      description: 'A donor donates $20 CAD one-time',
      data: {
        name: 'Chris De Cairos',
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
