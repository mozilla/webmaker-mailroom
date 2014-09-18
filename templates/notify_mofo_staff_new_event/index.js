module.exports = {
  name: 'Notify Mofo Staff - New event',
  description: 'Sent to mofo staff when a user creates a new event.',
  subject: 'New event created',
  tests: [
    {
      description: 'User jon created an event',
      data: {
        email: 'jon@jbuckley.ca',
        username: 'jon',
        eventId: 1
      }
    }
  ]
};
