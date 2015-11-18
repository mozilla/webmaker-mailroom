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
      locale: 'az',
      description: 'A az donor donates $10 USD',
      data: {
        name: 'az donor',
        amount: '$10',
        transaction_id: 'ch_fakeid',
        address: '366 Adelaide St W',
        city: 'Toronto',
        state: 'ON',
        zipcode: 'M5V 1R9',
        country: 'Canada'
      }
    }, {
      locale: 'cs',
      description: 'A cs donor donates $10 USD',
      data: {
        name: 'cs donor',
        amount: '$10',
        transaction_id: 'ch_fakeid',
        address: '366 Adelaide St W',
        city: 'Toronto',
        state: 'ON',
        zipcode: 'M5V 1R9',
        country: 'Canada'
      }
    }, {
      locale: 'es',
      description: 'An es donor donates $10 USD',
      data: {
        name: 'es donor',
        amount: '$10',
        transaction_id: 'ch_fakeid',
        address: '366 Adelaide St W',
        city: 'Toronto',
        state: 'ON',
        zipcode: 'M5V 1R9',
        country: 'Canada'
      }
    }, {
      locale: 'fr',
      description: 'A fr donor donates $10 USD',
      data: {
        name: 'fr donor',
        amount: '$10',
        transaction_id: 'ch_fakeid',
        address: '366 Adelaide St W',
        city: 'Toronto',
        state: 'ON',
        zipcode: 'M5V 1R9',
        country: 'Canada'
      }
    }, {
      locale: 'it',
      description: 'An it donor donates $10 USD',
      data: {
        name: 'it donor',
        amount: '$10',
        transaction_id: 'ch_fakeid',
        address: '366 Adelaide St W',
        city: 'Toronto',
        state: 'ON',
        zipcode: 'M5V 1R9',
        country: 'Canada'
      }
    }, {
      locale: 'nl',
      description: 'A nl donor donates $10 USD',
      data: {
        name: 'nl donor',
        amount: '$10',
        address: '366 Adelaide St W',
        city: 'Toronto',
        state: 'ON',
        zipcode: 'M5V 1R9',
        country: 'Canada'
      }
    }, {
      locale: 'pt-BR',
      description: 'A pt-BR donor donates $10 USD',
      data: {
        name: 'pt-BR donor',
        amount: '$10',
        transaction_id: 'ch_fakeid',
        address: '366 Adelaide St W',
        city: 'Toronto',
        state: 'ON',
        zipcode: 'M5V 1R9',
        country: 'Canada'
      }
    }, {
      locale: 'pt-PT',
      description: 'A pt-PT donor donates $10 USD',
      data: {
        name: 'pt-PT donor',
        amount: '$10',
        address: '366 Adelaide St W',
        city: 'Toronto',
        state: 'ON',
        zipcode: 'M5V 1R9',
        country: 'Canada'
      }
    }, {
      locale: 'ro',
      description: 'A ro donor donates $10 USD',
      data: {
        name: 'ro donor',
        amount: '$10',
        address: '366 Adelaide St W',
        city: 'Toronto',
        state: 'ON',
        zipcode: 'M5V 1R9',
        country: 'Canada'
      }
    }, {
      locale: 'sq',
      description: 'A sq donor donates $10 USD',
      data: {
        name: 'sq donor',
        amount: '$10',
        transaction_id: 'ch_fakeid',
        address: '366 Adelaide St W',
        city: 'Toronto',
        state: 'ON',
        zipcode: 'M5V 1R9',
        country: 'Canada'
      }
    }, {
      locale: 'zh-CN',
      description: 'A zh-CN donor donates $10 USD',
      data: {
        name: 'zh-CN donor',
        amount: '$10',
        transaction_id: 'ch_fakeid',
        address: '366 Adelaide St W',
        city: 'Toronto',
        state: 'ON',
        zipcode: 'M5V 1R9',
        country: 'Canada'
      }
    }, {
      locale: 'zh-TW',
      description: 'A zh-TW donor donates $10 USD',
      data: {
        name: 'zh-TW donor',
        amount: '$10',
        address: '366 Adelaide St W',
        city: 'Toronto',
        state: 'ON',
        zipcode: 'M5V 1R9',
        country: 'Canada'
      }
    }, {
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
