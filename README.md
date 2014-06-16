# Webmaker mailroom

This module outputs **rendered/localized html** for Webmaker emails given a template name, some arbitrary data, and a locale.

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
var locale = 'en-US';

var html = mailroom.render(templateName, data, locale);
// Do something with html
```
## List of available templates

### `test`
Data model:
```js
{
  number: 'This can be any number, just for testing.'
}
```

## Tests

### Automatic (with mocha)

```
npm install
npm test
```
### Manual tests

```
npm install
node example
```
Then visit http://localhost:1967/<template name> in your browser.

## Adding a new email template

1. If your email event is called "Awesome Event", create an html file in `templates/` called `awesome_event.html`
2. Refer to the [nunjucks templating docs](http://mozilla.github.io/nunjucks/templating.html) for how to add templated data.
3. Add strings to `locale/en_US/strings.json`. In the template, you should use the syntax `{{ 'key-name' | gettext }}`
3. Manually test your template by running `npm example`. If your html file was `templates/awesome_event.html`, you would navigate to `http://localhost:1967/awesome_event` in your browser.
4. Add automatic tests for your template to `test/test.js` and run `npm test`.
5. Update the 'List of available templates' section in `README.md`  with the event name and data model.

