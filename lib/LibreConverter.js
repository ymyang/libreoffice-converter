/**
 * Created by yang on 2015/12/25.
 */
const TAG = '[LibreConverter]';
var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;
var Promise = require('bluebird');

var LibreConverter = module.exports = {};

LibreConverter.toPdf = function(file) {
    return new Promise(function(resolve, reject) {
        try {
            var p = path.parse(file);
            var pdf = path.join(p.dir, p.name) + '.pdf';
            var cmd = 'soffice --headless --convert-to pdf --outdir ' + p.dir + ' ' + file;
            exec(cmd, function(err, stdout, stderr) {
                if (err) {
                    resolve(err);
                    return;
                }
                //console.log(TAG, 'stdout:', stdout, 'stderr:', stderr);
                if (fs.existsSync(pdf)) {
                    resolve(pdf);
                } else {
                    resolve();
                }
            });
        } catch(err) {
            reject(err);
        }
    });
};