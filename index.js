#!/usr/bin/env node

var fs = require('fs');
var readline = require('readline');
var Output = require('./output');


var mdname = process.argv[2];
var htmlname = process.argv[3];
if(!htmlname){
    console.log('usage: cool-slide demo.md demo.html');
    return;
}


var output = new Output(htmlname);


var rl = readline.createInterface({
      input: fs.createReadStream(mdname)
});


rl.on('line', function(line){

    if(line === '---'){
        
        output.addNewChapter();
        output.addNewSlide();

    } else if(line === '----'){
        
        output.addNewSlide();

    } else {

        output.addStrIntoSlide(line);
    }

}).on('close', function(){

    output.printHTML();

});


