module.exports = {
  // Choose a human-readable name. This is just for rendering example pages.
  name: '2018 Mozilla Festival Session Proposal',

  // Choose a good description; when is this email sent?
  description: 'When someone submits a session proposal on the Mozilla Festival website',

  // Choose a subject for your email
  subject: 'email_subject',

  // Create a test case for every possible version of the email,
  // E.g. with a user name, without a username
  tests: [
    {
      description: 'Chris submits a proposal',
      data: {
        first_name: 'Chris',
        github_program_repo_url: "https://github.com/MozillaFestival/mozfest-program-2018",
        github_issue_url: "https://github.com/MozillaFestival/mozfest-program-2018/issues/1",
        github_issue_title: "How to Devops like a Boss"
      }
    }
  ]
};
