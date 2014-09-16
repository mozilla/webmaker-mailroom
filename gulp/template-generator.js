var inquirer = require('inquirer');
var fs = require('fs');
var path = require('path');
var gulp = require('gulp');

var templateNames = fs.readdirSync(path.join(__dirname, '../templates'));

module.exports = function (callback) {
  inquirer.prompt([{
    name: 'id',
    message: 'Choose an id for your email (use underscores for spaces)',
    validate: function (input) {
      if (templateNames.indexOf(input) < 0) {
        return true;
      }
      return 'That name is taken';
    }
  }], function (answers) {
  gulp.src('./gulp/generator/**/*')
    .pipe(gulp.dest('templates/' + answers.id));
    callback();
  });
}
