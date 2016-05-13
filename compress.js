var fs = require('fs');
var minify = require('html-minifier').minify;

var compress = function(filename){
    var html = fs.readFileSync(filename).toString();
    var compressed_html = minify(html, {
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        preserveLineBreaks: true,
        preventAttributesEscaping: true,
        processConditionalComments: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        sortAttributes: true,
        sortClassName: true,
        useShortDoctype: true
    });
    fs.writeFileSync(filename, compressed_html);
};

module.exports = compress;
