module.exports = {
  // Choose a human-readable name. This is just for rendering example pages.
  name: 'Webmaker Activity',

  // Choose a good description; when is this email sent?
  description: 'Email sent when creating a new event with the event wizard',

  // Choose a subject for your email
  subject: 'Instructions for your upcoming Webmaker Activity',

  // Create a test case for every possible version of the email,
  // E.g. with a user name, without a username
  tests: [
    {
      description: 'Remix Your School Web Activity',
      data: {
        activity_type: 'meme',
        eventDate: 'Wed Dec 10 2014 14:00:00 GMT-0500 (EST)',
        username: 'samus'
      }
    },
    {
      description: 'Music Video Mashup Web Activity',
      data: {
        activity_type: 'video',
        eventDate: 'Wed Dec 10 2014 14:00:00 GMT-0500 (EST)',
        username: 'samus'
      }
    },
    {
      description: 'Private Eye Web Activity',
      data: {
        activity_type: 'privacy',
        eventDate: 'Wed Dec 10 2014 14:00:00 GMT-0500 (EST)',
        username: 'samus'
      }
    }
  ]
};
