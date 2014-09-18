var fs = require('fs-extra');

module.exports = function (callback) {
    fs.removeSync('./build');
    fs.mkdirsSync('build');
    callback();
};

