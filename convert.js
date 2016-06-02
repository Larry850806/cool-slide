var fs = require('fs');
var util = require('util');
var path = require('path');
var marked = require('marked');

const slideHead = '<section>';
const slideTail = '</section>';
const chapterHead = '<section><section>';
const chapterTail = '</section></section>';
const head = fs.readFileSync(__dirname + '/src/outputHTML/head.html').toString();
const tail = fs.readFileSync(__dirname + '/src/outputHTML/tail.html').toString();

var structure = [];

var addNewChapter = function(){
    structure.push([]);
};

var addNewSlide = function(){
    var index = structure.length - 1;
    structure[index].push([]);
};

var addStrIntoSlide = function(mdStr){
    var i = structure.length - 1;
    var j = structure[i].length - 1;
    if(!structure[i][j]){
        structure[i][j] = (mdStr + '\n');
    } else {
        structure[i][j] += (mdStr + '\n');
    }
};

var setOutFile = function(outFile){
    addNewChapter();
    addNewSlide();
    var out = fs.createWriteStream(outFile, {flags : 'w'});
    console.output = function(d, callback){
        out.write(util.format(d) + '\n', 'utf8', callback);
    };
};

var printHTML = function(callback){
    console.output(head);

    for(var i in structure){
        console.output(chapterHead);
        var chapter = structure[i];

        for(var j in chapter){
            if(j != 0) console.output(slideHead);
            var slide = chapter[j];
            console.output(marked(slide));
            if(j != chapter.length - 1) console.output(slideTail);
        }

        console.output(chapterTail);
    }

    console.output(tail, callback);
    structure = [];
};

module.exports.setOutFile = setOutFile;
module.exports.addNewChapter = addNewChapter;
module.exports.addNewSlide = addNewSlide;
module.exports.addStrIntoSlide = addStrIntoSlide;
module.exports.printHTML = printHTML;


