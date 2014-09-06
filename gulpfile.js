var gulp = require('gulp');

var webserver = require('gulp-webserver');
var clean = require('./gulp/clean');
var build = require('./gulp/build');

// Build
gulp.task('clean', clean);
gulp.task('build', ['clean'], build);

// Watch
gulp.task('watch', function () {
  gulp.watch('./{partials,locale,test,templates}/**/*.{js,json,html}', ['build']);
});

// Server
gulp.task('server', function() {
  gulp.src('build')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

// Dev
gulp.task('dev', ['build', 'watch', 'server'])
