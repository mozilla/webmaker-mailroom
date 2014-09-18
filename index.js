module.exports = function (options) {
  options = options || {};

  const DEFAULT_LANG = 'en-US';

  var path = require('path');
  var nunjucks = require('nunjucks');
  var i18n = require('webmaker-i18n');

  // Is language supported?
  function isLanguageSupported(locale) {
    return i18n.getSupportLanguages().indexOf(locale) !== -1;
  };

  function gettext(locale) {
    var strings = i18n.getStrings(locale);
    return function (string) {
      return strings[string] || string;
    }
  };

  // Configure nunjucks
  var env = nunjucks.configure(__dirname, { autoescape: true });
  env.addFilter('instantiate', function (input) {
    return nunjucks.renderString(input, this.getVariables());
  });
  env.addFilter('gettext', function (input) {
    return this.lookup('gettext')(input);
  });

  // Setup locales with i18n
  i18n.middleware({
    supported_languages: ['*'],
    default_lang: DEFAULT_LANG,
    translation_directory: path.resolve(__dirname, 'locale')
  });

  var baseHtml = {
    header: nunjucks.render('base/header.html'),
    footer: nunjucks.render('base/footer.html')
  };

  return {
    render: function (template, data, options) {
      options = options || {};
      var locals = data || {};
      var header = '';
      var footer = '';
      var html;
      var subject;
      var locale = options.locale;
      var partial = options.partial;
      // This option is really only used for tests
      var dir = options.dir || 'templates';
      var metaData = require(__dirname + '/' + dir +'/' + template);

      locale = isLanguageSupported(locale) ? locale : DEFAULT_LANG;
      locals.gettext = gettext(locale);
      locals.locale = locale;
      try {
        if (!partial) {
          header = baseHtml.header;
          footer = baseHtml.footer;
        }
        html = nunjucks.render(dir + '/' + template + '/index.html', data);
        subject = nunjucks.renderString(locals.gettext(metaData.subject), data);
        return {
          html: header + html  + footer,
          subject: subject
        };
      } catch (err) {
        console.log(err);
      }
    }
  };
};
