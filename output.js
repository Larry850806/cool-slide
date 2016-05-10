var fs = require('fs');
var util = require('util');
var path = require('path');

var head_first = '<!DOCTYPE HTML><html lang="en"><head><meta charset="utf-8"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black"><meta name="mobile-web-app-capable" content="yes"><title>'


var head_tail = '</title><link rel="stylesheet" href="https://rawgit.com/Larry850806/cool-slide/master/src/reveal.css"><link rel="stylesheet" href="https://rawgit.com/Larry850806/cool-slide/master/src/black.css" id="theme"><link rel="stylesheet" href="https://rawgit.com/Larry850806/cool-slide/master/src/zenburn.css"><link rel="stylesheet" href="https://rawgit.com/Larry850806/cool-slide/master/src/site.css"><link rel="stylesheet" href="https://rawgit.com/Larry850806/cool-slide/master/src/slide.css"><script src="https://rawgit.com/Larry850806/cool-slide/master/src/jquery.min.js"></script></head><body><div class="reveal"><div class="slides">\n<style>\n.reveal, .reveal h1, .reveal h2, .reveal h3, .reveal h4, .reveal h5, .reveal h6 {font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, "Microsoft JhengHei", Meiryo, "ＭＳ ゴシック", "MS Gothic", sans-serif;}h1, h2, h3, h4, h5, h6 {text-transform: none !important;}</style>\n\n\n';

var tail = '\n\n\n</div></div><script src="https://rawgit.com/Larry850806/cool-slide/master/src/ga.js" async defer></script><script src="https://rawgit.com/Larry850806/cool-slide/master/src/newrelic.js" async defer></script><script src="https://rawgit.com/Larry850806/cool-slide/master/src/mixpanel.js" async defer></script><script src="https://rawgit.com/Larry850806/cool-slide/master/src/head.min.js"></script><script src="https://rawgit.com/Larry850806/cool-slide/master/src/reveal.js"></script><script src="https://rawgit.com/Larry850806/cool-slide/master/src/string.min.js"></script><script src="https://rawgit.com/Larry850806/cool-slide/master/src/xss.min.js"></script><script src="https://rawgit.com/Larry850806/cool-slide/master/src/render.js"></script><script>if (typeof mixpanel !== \'undefined\') mixpanel.track("enter slide");var body = $(".slides").html();$(".slides").html(S(body).unescapeHTML().s);function extend() {var target = {};for (var i = 0; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (source.hasOwnProperty(key)) {target[key] = source[key];}}}return target;}var deps = [{ src: \'https://rawgit.com/Larry850806/cool-slide/master/src/classList.js\', condition: function() { return !document.body.classList; } },{ src: \'https://rawgit.com/Larry850806/cool-slide/master/src/marked.js\', condition: function() { return !!document.querySelector(\'[data-markdown]\'); } },{ src: \'https://rawgit.com/Larry850806/cool-slide/master/src/reveal-markdown.js\', condition: function() { return !!document.querySelector(\'[data-markdown]\'); } },{ src: \'https://rawgit.com/Larry850806/cool-slide/master/src/highlight.js\', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },{ src: \'https://rawgit.com/Larry850806/cool-slide/master/src/notes.js\', async: true, condition: function() { return !!document.body.classList; } },{ src: \'https://rawgit.com/Larry850806/cool-slide/master/src/math.js\', async: true }];var defaultOptions = {controls: true,progress: true,history: true,center: true,transition: \'slide\',dependencies: deps};var queryOptions = Reveal.getQueryHash() || {};var options = {};options = extend(defaultOptions, options, queryOptions);Reveal.initialize(options);</script></body></html>'


var slideHead = '<section  data-markdown><script type="text/template">';
var slideTail = '</script></section>';
var chapterHead = '<section ><section data-markdown><script type="text/template">';
var chapterTail = '</script></section></section>';




module.exports = function(outFile){

    var head = head_first + path.basename(outFile) + head_tail;

    var structure = [];

    var out_file = fs.createWriteStream(outFile, {flags : 'w'});
    console.output = function(d) { //
        out_file.write(util.format(d) + '\n');
    };



    this.addNewChapter = function(){
        structure.push([]);
    };

    this.addNewSlide = function(){
        var index = structure.length - 1;
        structure[index].push([]);
    };

    this.addStrIntoSlide = function(str){
        var i = structure.length - 1;
        var j = structure[i].length - 1;
        if(!structure[i][j]){
            structure[i][j] = (str + '\n');
        } else {
            structure[i][j] += (str + '\n');
        }
    };

    this.printHTML = function(){
        console.output(head);

        for(var i in structure){
            console.output(chapterHead);
            var chapter = structure[i];

            for(var j in chapter){
                if(j != 0) console.output(slideHead);
                var slide = chapter[j];
                console.output(slide);
                if(j != chapter.length - 1) console.output(slideTail);
            }

            console.output(chapterTail);
        }

        console.output(tail);
    };

    this.addNewChapter();
    this.addNewSlide();

}

