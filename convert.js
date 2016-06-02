var fs = require('fs');
var marked = require('marked');

const slideHead = '<section>';
const slideTail = '</section>';
const chapterHead = '<section><section>';
const chapterTail = '</section></section>';
const head = fs.readFileSync(__dirname + '/src/outputHTML/head.html').toString();
const tail = fs.readFileSync(__dirname + '/src/outputHTML/tail.html').toString();

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

var init = function(){
    structure = [];
    addNewChapter();
    addNewSlide();
};

var getHTML = function(){
    var html;
    html += head + '\n';
    
    for(var i in structure){
        html += chapterHead + '\n';
        var chapter = structure[i];

        for(var j in chapter){
            if(j != 0) html += slideHead + '\n';
            var slide = chapter[j];
            html += marked(slide) + '\n';
            if(j != chapter.length - 1) html += slideTail + '\n';
        }

        html += chapterTail + '\n';
    }

    html += tail + '\n';
    init();
    return html;
};

var structure = null;
init();

module.exports.addNewChapter = addNewChapter;
module.exports.addNewSlide = addNewSlide;
module.exports.addStrIntoSlide = addStrIntoSlide;
module.exports.getHTML = getHTML;


