var fs = require('fs');
var readline = require('readline');

var head = '<!DOCTYPE HTML><html lang="en"><head><meta charset="utf-8"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black"><meta name="mobile-web-app-capable" content="yes"><title>Hello - HackMD</title><link rel="icon" type="image/png" href="https://hackmd.io/favicon.png"><link rel="apple-touch-icon" href="https://hackmd.io/apple-touch-icon.png"><link rel="stylesheet" href="https://hackmd.io/vendor/reveal.js/css/reveal.css"><link rel="stylesheet" href="https://hackmd.io/vendor/reveal.js/css/theme/black.css" id="theme"><link rel="stylesheet" href="https://hackmd.io/vendor/reveal.js/lib/css/zenburn.css"><link rel="stylesheet" href="https://hackmd.io/css/site.css"><link rel="stylesheet" href="https://hackmd.io/css/slide.css"><script>document.write( \'<link rel="stylesheet" href="https://hackmd.io/vendor/reveal.js/css/print/\' + ( window.location.search.match( /print-pdf/gi ) ? \'pdf\' : \'paper\' ) + \'.css" type="text/css" media="print">\' );</script><script src="https://hackmd.io/vendor/jquery/dist/jquery.min.js"></script></head><body><div class="reveal"><div class="slides">\n\n\n';

var tail = '\n\n\n</div></div><script src="https://hackmd.io/js/ga.js" async defer></script><script src="https://hackmd.io/js/newrelic.js" async defer></script><script src="https://hackmd.io/js/mixpanel.js" async defer></script><script src="https://hackmd.io/vendor/reveal.js/lib/js/head.min.js"></script><script src="https://hackmd.io/vendor/reveal.js/js/reveal.js"></script><script src="https://hackmd.io/vendor/string.min.js"></script><script src="https://hackmd.io/vendor/xss/dist/xss.min.js"></script><script src="https://hackmd.io/js/render.js"></script><script>if (typeof mixpanel !== \'undefined\') mixpanel.track("enter slide");var body = $(".slides").html();$(".slides").html(S(body).unescapeHTML().s);function extend() {var target = {};for (var i = 0; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (source.hasOwnProperty(key)) {target[key] = source[key];}}}return target;}var deps = [{ src: \'https://hackmd.io/vendor/reveal.js/lib/js/classList.js\', condition: function() { return !document.body.classList; } },{ src: \'https://hackmd.io/vendor/reveal.js/plugin/markdown/marked.js\', condition: function() { return !!document.querySelector(\'[data-markdown]\'); } },{ src: \'https://hackmd.io/js/reveal-markdown.js\', condition: function() { return !!document.querySelector(\'[data-markdown]\'); } },{ src: \'https://hackmd.io/vendor/reveal.js/plugin/highlight/highlight.js\', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },{ src: \'https://hackmd.io/vendor/reveal.js/plugin/notes/notes.js\', async: true, condition: function() { return !!document.body.classList; } },{ src: \'https://hackmd.io/vendor/reveal.js/plugin/math/math.js\', async: true }];var defaultOptions = {controls: true,progress: true,history: true,center: true,transition: \'slide\',dependencies: deps};var queryOptions = Reveal.getQueryHash() || {};var options = {};options = extend(defaultOptions, options, queryOptions);Reveal.initialize(options);</script></body></html>'

var slideHead = '<section  data-markdown><script type="text/template">';
var slideTail = '</script></section>';

var chapterHead = '<section ><section data-markdown><script type="text/template">';
var chapterTail = '</script></section></section>';

var structure = [];

var addNewChapter = function(){
    structure.push([]);
};

var addNewSlide = function(){
    var index = structure.length - 1;
    structure[index].push([]);
};

var addStrIntoSlide = function(str){
    var i = structure.length - 1;
    var j = structure[i].length - 1;
    if(!structure[i][j]){
        structure[i][j] = (str + '\n');
    } else {
        structure[i][j] += (str + '\n');
    }
};

var printHTML = function(){
    console.log(head);

    for(var i in structure){
        console.log(chapterHead);
        var chapter = structure[i];
        
        for(var j in chapter){
            if(j != 0) console.log(slideHead);
            var slide = chapter[j];
            console.log(slide);
            if(j != chapter.length - 1) console.log(slideTail);
        }

        console.log(chapterTail);
    }

    console.log(tail);
};

var rl = readline.createInterface({
      input: fs.createReadStream('demo.md')
});

addNewChapter();
addNewSlide();

rl.on('line', function(line){

    if(line === '---'){
        
        addNewChapter();
        addNewSlide();

    } else if(line === '----'){
        
        addNewSlide();

    } else {

        addStrIntoSlide(line);
    }

}).on('close', function(){

    printHTML();

});


