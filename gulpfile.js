var gulp = require('gulp');

var webserver = require('gulp-webserver');
var clean = require('./gulp/clean');
var build = require('./gulp/build');

// Build
gulp.task('clean', clean);
gulp.task('build', ['clean'], build);

var fs = require('fs');
var path = require('path');
gulp.task('convert', function (callback) {
    var templateDir = __dirname + '/templates';
    var convertDir = __dirname + '/converted';
    var files = fs.readdirSync(templateDir);
    files.forEach(function (file) {
        if (path.extname(file) !== '.html') {
            return;
        }
        var templateName = path.basename(file, '.html');
        console.log(templateName);
        var newDirName = convertDir + '/' + templateName;
        fs.mkdirSync(newDirName);
        fs.createReadStream(templateDir + '/' + file)
        .pipe(fs.createWriteStream(newDirName + '/index.html'));
    });
});

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
