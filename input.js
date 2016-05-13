var fs = require('fs');
var readline = require('readline');

module.exports = function(infile, output){

    this.process = function(funcMap, funcDefault, funcPrintHTML, callback){

        var rl = readline.createInterface({
              input: fs.createReadStream(infile)
        });

        rl.on('line', function(line){
            
            var func = funcMap[line];
            if(!func) func = funcDefault;
            func(line);

        }).on('close', function(){

            funcPrintHTML(callback);

        });

    }

};



