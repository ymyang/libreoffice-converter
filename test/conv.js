/**
 * Created by yang on 2015/12/25.
 */
var converter = require('../index.js');

var file = '/root/abc.pptx';
converter.toPdf(file).then(function(pdf) {
    console.log(pdf);
});