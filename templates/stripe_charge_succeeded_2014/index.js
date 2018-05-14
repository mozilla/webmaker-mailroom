module.exports = {
  // Choose a human-readable name. This is just for rendering example pages.
  name: 'Stripe Charge Succeeded (2014)',

  // Choose a good description; when is this email sent?
  description: 'Email sent after successfully processing a Stripe payment',

  // Choose a subject for your email
  subject: 'stripe_charge_succeeded_2014_subject',
  recurringSubject: 'stripe_charge_succeeded_2014_recurring_subject',

  // Create a test case for every possible version of the email,
  // E.g. with a user name, without a username
  tests: [
    {
      locale: 'az',
      description: 'A az donor donates $10 USD',
      data: {
        amount: '$10',
        transaction_id: 'ch_fakeid',
        timestamp: '2015-11-09T21:01:13.000Z'
      }
    }, {
      locale: 'ca',
      description: 'A ca donor donates $10 USD',
      data: {
        amount: '$10',
        transaction_id: 'ch_fakeid',
        timestamp: '2015-11-09T21:01:13.000Z'
      }
    }, {
      locale: 'cs',
      description: 'A cs donor donates $10 USD',
      data: {
        amount: '$10',
        transaction_id: 'ch_fakeid',
        timestamp: '2015-11-09T21:01:13.000Z'
      }
    }, {
      locale: 'es',
      description: 'An es donor donates $10 USD',
      data: {
        amount: '$10',
        transaction_id: 'ch_fakeid',
        timestamp: '2015-11-09T21:01:13.000Z'
      }
    }, {
      locale: 'fr',
      description: 'A fr donor donates $10 USD',
      data: {
        amount: '$10',
        transaction_id: 'ch_fakeid',
        timestamp: '2015-11-09T21:01:13.000Z'
      }
    }, {
      locale: 'it',
      description: 'An it donor donates $10 USD',
      data: {
        amount: '$10',
        transaction_id: 'ch_fakeid',
        timestamp: '2015-11-09T21:01:13.000Z'
      }
    }, {
      locale: 'ko',
      description: 'A ko donor donates $10 USD',
      data: {
        amount: '$10',
        transaction_id: 'ch_fakeid',
        timestamp: '2015-11-09T21:01:13.000Z'
      }
    }, {
      locale: 'nl',
      description: 'A nl donor donates $10 USD',
      data: {
        amount: '$10',
        transaction_id: 'ch_fakeid',
        timestamp: '2015-11-09T21:01:13.000Z'
      }
    }, {
      locale: 'pt-BR',
      description: 'A pt-BR donor donates $10 USD',
      data: {
        amount: '$10',
        transaction_id: 'ch_fakeid',
        timestamp: '2015-11-09T21:01:13.000Z'
      }
    }, {
      locale: 'pt-PT',
      description: 'A pt-PT donor donates $10 USD',
      data: {
        amount: '$10',
        transaction_id: 'ch_fakeid',
        timestamp: '2015-11-09T21:01:13.000Z'
      }
    }, {
      locale: 'ro',
      description: 'A ro donor donates $10 USD',
      data: {
        amount: '$10',
        transaction_id: 'ch_fakeid',
        timestamp: '2015-11-09T21:01:13.000Z'
      }
    }, {
      locale: 'sq',
      description: 'A sq donor donates $10 USD',
      data: {
        amount: '$10',
        transaction_id: 'ch_fakeid',
        timestamp: '2015-11-09T21:01:13.000Z'
      }
    }, {
      locale: 'zh-CN',
      description: 'A zh-CN donor donates $10 USD',
      data: {
        amount: '$10',
        transaction_id: 'ch_fakeid',
        timestamp: '2015-11-09T21:01:13.000Z'
      }
    }, {
      locale: 'zh-TW',
      description: 'A zh-TW donor donates $10 USD',
      data: {
        amount: '$10',
        transaction_id: 'ch_fakeid',
        timestamp: '2015-11-09T21:01:13.000Z'
      }
    }, {
      locale: 'en-US',
      description: 'An en-US donor donates $10 USD',
      data: {
        amount: '$10',
        transaction_id: 'ch_fakeid',
        timestamp: '2015-11-09T21:01:13.000Z',
        recurring_donation: false,
        livemode: true
      }
    }, {
      locale: 'de',
      description: 'A de donor donates €10 EUR',
      data: {
        amount: '€10',
        transaction_id: 'ch_fakeid',
        timestamp: '2015-11-09T21:01:13.000Z',
        recurring_donation: true,
        livemode: true
      }
    }
  ]
};
