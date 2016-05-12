var fs = require('fs');
var util = require('util');
var path = require('path');

var slideHead = '<section  data-markdown><script type="text/template">';
var slideTail = '</script></section>';
var chapterHead = '<section ><section data-markdown><script type="text/template">';
var chapterTail = '</script></section></section>';

module.exports = function(outFile){

    var head = fs.readFileSync('./src/outputHTML/head.html').toString();
    var tail = fs.readFileSync('./src/outputHTML/tail.html').toString();

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

