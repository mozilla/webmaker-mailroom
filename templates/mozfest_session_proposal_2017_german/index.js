module.exports = {
  // Choose a human-readable name. This is just for rendering example pages.
  name: '2017 Mozilla Festival Session Proposal (German)',

  // Choose a good description; when is this email sent?
  description: 'When someone submits a session proposal in German on the Mozilla Festival website',

  // Choose a subject for your email
  subject: 'Ihr Vorschlag für eine MozFest-Veranstaltung',

  // Create a test case for every possible version of the email,
  // E.g. with a user name, without a username
  tests: [
    {
      description: 'Chris submits a proposal in German',
      data: {
        first_name: 'Chris',
        github_issue_url: "https://github.com/MozillaFoundation/mozfest-program-2017/issues/1",
        github_issue_title: "Taten sagen mehr als Worte"
      }
    }
  ]
};
