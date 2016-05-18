var header = require('./core/header');
var picture = require('./core/picture');
var link = require('./core/link');
//var list = require('./core/list');

const NORMAL_MODE = 0;
const HEADER_MODE = 1;
const PICTURE_MODE = 2;
const LINK_MODE = 3;
const LIST_MODE = 4;
const CODE_MODE = 5;

var current_mode = NORMAL_MODE;

var mode2fun = {};
mode2fun[HEADER_MODE] = header;
mode2fun[PICTURE_MODE] = picture;
mode2fun[LINK_MODE] = link;
//mode2fun[LIST_MODE] = list;

var regex2mode = function(str){
    if(str.match(/^#.*$/)) return HEADER_MODE;
    if(str.match(/^!\[\](.+)$/)) return PICTURE_MODE
    if(str.match(/^\[.+\](.+)$/)) return LINK_MODE;
    //if(str.match(/^- .*$/)) return LIST_MODE;
    return NORMAL_MODE;
};

var md2html = function(str){

    var rst = {};
    
    while(1){

        // var rst = {
        //     nextMode,    // A kind of mode
        //     err,         // true or false
        //     str          // return string
        // }

        if(current_mode == NORMAL_MODE){
            current_mode = regex2mode(str);
            if(current_mode == NORMAL_MODE){
                return str;
            }
        } else {
            var fun = mode2fun[current_mode];
            rst = fun(str);
            current_mode = rst.nextMode;
            if(rst.err){
                continue; 
            } else {
                return rst.str;
            }
        }

    }



/*
    } else if(str.match(/^```/)){                   // ```                      
                                                    // function(){              ->  <pre><code>function(){     
        if(current_mode == CODE_MODE){              //     var a = 123;         ->  var a = 123;                    
            current_mode = NORMAL_MODE;             //     console.log('123');  ->  console.log('123');
            return mode_buffer + '</code></pre>';   // }                        ->  </code></pre>
        } else {                                    // ```                     
            current_mode = CODE_MODE;
            mode_buffer = '<pre><code>';
            return '';
        }

    }

    if(current_mode == CODE_MODE){
        mode_buffer += str + '\n';
        return '';
    }

    if(current_mode != NORMAL_MODE){
        current_mode = NORMAL_MODE;
        str = mode_buffer + '\n' + str;
        mode_buffer = '';
    }
*/
    return str;
}

module.exports = md2html;
