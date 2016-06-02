var convert = require('./convert');

var coolSlide = function(mdStr){
    var lines = mdStr.split('\n');

    for(var i=0 ; i<lines.length ; i++){
        var line = lines[i];
        if(line === '---'){
            convert.addNewChapter();
            convert.addNewSlide();
        } else if(line === '----'){
            convert.addNewSlide();
        } else {
            convert.addStrIntoSlide(line);
        }
    }

    var htmlStr = convert.getHTML();
    return htmlStr;
};

module.exports = coolSlide;

