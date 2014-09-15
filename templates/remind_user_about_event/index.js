module.exports = {
  name: 'Remind user about an event',
  description: 'Sent to user when an event they have RSVPd to will happen soon',
  tests: [{
    description: 'An event is about to occur',
    data: {
      email: 'jon@jbuckley.ca',
      locale: 'en-US',
      userId: 4,
      username: 'bonnie',
      eventAddress: '366 Adelaide St W, Toronto, ON, Canada',
      eventDate: 'Jul 11 2014 4:00 PM EDT',
      eventDescription: 'Celebrate another two weeks of squashed Bugs! Completed Bugs: http://mzl.la/1oovqZZ Hug-5\'s are encouraged. You may be asking yourself...what is that? http://vimeo.com/9949084 \O/ \O/ \o/',
      eventTitle: 'High Five The Webmaker Team AND CDOT Team',
      eventURL: 'https://events.webmaker.org/#!/events/3834',
      organizerEmail: null,
      organizerUsername: 'jbuck'
    }
  }]
};
