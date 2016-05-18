var isFirst = true;
var buffer;

var process = function(str){
    // NORMAL_MODE 0
    // LIST_MODE 4

    var rst = {
        nextMode: 0,
        err: false,
        str: null
    }

    if(str.match(/^- .*$/)){         

        rst.nextMode = 4;
        var item = '<li>' + str.substring(1) + '</li>';

        if(isFirst){
            isFirst = false;
            rst.str = '<ul>\n' + item;
        } else {
            rst.str = item;
        }

    } else {
        rst.err = true;
        rst.str = '</ul>'
    }

    return rst;

    // - item1  ->  <ul><li> item1 </li>
    // - item2  ->      <li> item2 </li>
    // - item3  ->      <li> item3 </li></ul>
}

module.exports = process;
