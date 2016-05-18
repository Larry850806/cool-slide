var isFirst = true;

var process = function(str){
    // NORMAL_MODE 0
    // LIST_MODE 4

    var rst = {
        nextMode: 0,  // NORMAL_MODE
        err: false,
        str: null
    }

    if(str.match(/^- .*$/)){         

        if(isFirst)

        if(current_mode == LIST_MODE){
            var deleteEndul = mode_buffer.substring(0, mode_buffer.length-6);
            mode_buffer = deleteEndul + '\n<li>' + str.substring(1) + '</li>\n</ul>'
        } else {
            current_mode = LIST_MODE;
            mode_buffer = '<ul>\n<li>' + str.substring(1) + '</li>\n</ul>'
        }
        return '';
    }
}

// - item1  ->  <ul><li> item1 </li>
// - item2  ->      <li> item2 </li>
// - item3  ->      <li> item3 </li></ul>
//
module.exports = process;
