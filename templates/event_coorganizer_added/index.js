module.exports = {
  name: 'Event Coorganizer Added',
  description: 'This email is sent to a user when they become a coorganizer of an event.',
  subject: 'You\'ve been added as a coorganizer to {{ eventName }}!',
  tests: [
    {
      description: 'cade has been added as a coorganizer of Mozfest 2014',
      data: {
        username: 'cade',
        eventName: 'Mozfest 2014',
        eventUrl: 'https://events.mofostaging.net/#!/events/8',
        eventEditUrl: 'https://events.mofostaging.net/#!/edit/8'
      }
    }
  ]
};
