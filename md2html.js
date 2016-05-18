const NORMAL_MODE = 0;
const LIST_MODE = 1;
const CODE_MODE = 2;

var mode_buffer = '';
var current_mode = NORMAL_MODE;

// meet list head:
//
// if(current_mode == LIST_MODE)
// still LIST_MODE
//
// if(current_mode != LIST_MODE)
// turn to LIST_MODE

// meet normal head:
//
// if(current_mode == LIST_MODE)
// output the buffer and turn to NORMAL_MODE
//
// if(current_mode != NORMAL_MODE)
// do nothing

var md2html = function(str){


    if(str.match(/^#[^#].*$/)){             // # Hello  ->  <h1> Hello </h1>

        str = '<h1>' + str.substring(1) + '</h1>';

    } else if(str.match(/^##[^#].*$/)){     // ## Hello  ->  <h2> Hello </h2>
        
        str = '<h2>' + str.substring(2) + '</h2>';

    } else if(str.match(/^###[^#].*$/)){    // ### Hello  ->  <h3> Hello </h3>

        str = '<h3>' + str.substring(3) + '</h3>';

    } else if(str.match(/^!\[\](.+)$/)){    // ![](image.jpg)  ->  <img src="image.jpg">

        str = '<img src="' + str.substring(4, str.length-1) + '">';

    } else if(str.match(/^\[.+\](.+)$/)){   // [Click Me](url)  ->  <a href="url"> Click Me </a>

        var leftBigIndex = str.indexOf('[');
        var rightBigIndex = str.indexOf(']');
        var leftSmallIndex = str.indexOf('(');
        var rightSmallIndex = str.indexOf(')');

        var url = str.substring(leftSmallIndex + 1, rightSmallIndex);
        var text = str.substring(leftBigIndex + 1, rightBigIndex);

        str = '<a href="' + url + '" style="font-size: 55px"> ' + text + ' </a>';

    } else if(str.match(/^-.*$/)){          // - item1  ->  <ul><li> item1 </li>
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

    } else if(str.match(/^```.*$/)){                // ```                      
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
