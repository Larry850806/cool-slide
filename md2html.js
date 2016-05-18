var header = require('./core/header');
var picture = require('./core/picture');
var link = require('./core/link');

const NORMAL_MODE = 0;
const HEADER_MODE = 1;
const PICTURE_MODE = 2;
const LINK_MODE = 3;
const LIST_MODE = 4;
const CODE_MODE = 5;

var mode_buffer = '';
var current_mode = NORMAL_MODE;

var md2html = function(str){

    if(str.match(/^#.*$/)){

        str = header(str);

    } else if(str.match(/^!\[\](.+)$/)){

        str = picture(str);

    } else if(str.match(/^\[.+\](.+)$/)){

        str = link(str);

    } else if(str.match(/^- .*$/)){         
        // - item1  ->  <ul><li> item1 </li>
        // - item2  ->      <li> item2 </li>
        // - item3  ->      <li> item3 </li></ul>
        if(current_mode == LIST_MODE){
            var deleteEndul = mode_buffer.substring(0, mode_buffer.length-6);
            mode_buffer = deleteEndul + '\n<li>' + str.substring(1) + '</li>\n</ul>'
        } else {
            current_mode = LIST_MODE;
            mode_buffer = '<ul>\n<li>' + str.substring(1) + '</li>\n</ul>'
        }
        return '';

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

    return str;
}

module.exports = md2html;
