var fs = require('fs');
var Promise = require('bluebird');
var readline = require('readline');
var convert = require('./convert');

var coolSlide = function(infile, outfile){
    convert.setOutFile(outfile);

    var rl = readline.createInterface({
          input: fs.createReadStream(infile)
    });

    rl.on('line', function(line){
        
        if(line === '---'){
            convert.addNewChapter();
            convert.addNewSlide();
        } else if(line === '----'){
            convert.addNewSlide();
        } else {
            convert.addStrIntoSlide(line);
        }

    }).on('close', function(){
        convert.printHTML(function(){
            console.log('finish');
        });
    });
};

coolSlide('demo.md', 'demo.html');

