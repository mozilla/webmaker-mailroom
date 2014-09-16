module.exports = {
  name: 'Event Created',
  description: 'This email is sent to a user when they create an event.',
  subject: 'Tips for your Webmaker event',
  tests: [
    {
      description: 'k88hudson has created an event',
      data: {
        username: 'k88hudson'
      }
    }
  ]
};
