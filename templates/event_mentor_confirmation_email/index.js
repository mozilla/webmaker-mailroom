module.exports = {
  name: 'Event Mentor Confirmation',
  description: 'This email is sent to a user who is added as an event mentor',
  tests: [
    {
      description: 'jenn12 is added as a mentor to an event (she has a Webmaker account)',
      data: {
        username: "jenn12",
        eventName: "Some Awesome Event",
        eventUrl: "https://events.webmaker.org/#!/events/3452",
        confirmUrlYes: "https://events.webmaker.org/confirm/somerandomtoken&confirmation=yes",
        confirmUrlNo: "https://events.webmaker.org/confirm/somerandomtoken&confirmation=no",
        organizerUsername: "k88hudson"
      }
    },
    {
      description: 'Someone is added as a mentor by email but doesn\'t have a Webmaker account',
      data: {
        eventName: "Some Other Awesome Event",
        eventUrl: "https://events.webmaker.org/#!/events/3452",
        confirmUrlYes: "https://events.webmaker.org/confirm/somerandomtoken&confirmation=yes",
        confirmUrlNo: "https://events.webmaker.org/confirm/somerandomtoken&confirmation=no",
        organizerUsername: "k88hudson"
      }
    }
  ]
};
