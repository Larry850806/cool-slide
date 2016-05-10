var fs = require('fs');
var readline = require('readline');

module.exports = function(infile, output){

    this.process = function(){

        var rl = readline.createInterface({
              input: fs.createReadStream(infile)
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

    }

};



