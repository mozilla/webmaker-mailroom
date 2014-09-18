# Webmaker mailroom

This module outputs **rendered/localized html** for Webmaker emails given a template name, some arbitrary data, and a locale.

![jbuck the mailman](jbuckmail.png)

## Install
```
npm install webmaker-mailroom
```

## Usage
```
var mailroom = require('webmaker-mailroom');

// Configure
var templateName = 'badge_awarded';
var data = {
  name: 'Kate Hudson',
  faveTeam: 'DFB'
};
var options = {
  locale: 'en-US',
  partial: true
};

var email = mailroom.render(templateName, data, options);
// Output
// email.html: The html of the email body
// email.subject: The subject of the html
```

### Options

* `locale` - The locale of the email, defaults to `en-US`.
* `partial` - Only render the body of the email, do not include html headers/footers. Defaults to `false`. Do NOT set this to true if you are passing the email directly to `node-mailer`, you want to include the full html.

## Development

If you are developing a template, install gulp with `npm install -g gulp` and simply run:

```
npm install
gulp dev
```

This will start a watch process, build test files as you make changes, and run a server so you can view them in a browser.

### Tests

```
gulp test
```

### Adding a new email template

1. Run `gulp new`. Choose an appropriate id for your email, e.g. `my_awesome_email`.
2. In `templates/my_awesome_email/index.html`, create a template. Refer to the [nunjucks templating docs](http://mozilla.github.io/nunjucks/templating.html) for how to add templated data.
3. In `templates/my_awesome_email/index.js`, add a name, description, and some test data for your email.
4. Run `gulp test` to validate your template with the test data you provided, or `gulp dev` to see the email in the browser.
