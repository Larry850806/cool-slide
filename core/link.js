// [Click Me](url)  ->  <a href="url"> Click Me </a>

var process = function(str){
    var rst = {
        nextMode: 0,  // NORMAL_MODE
        err: false,
        str: null
    }

    var leftBigIndex = str.indexOf('[');
    var rightBigIndex = str.indexOf(']');
    var leftSmallIndex = str.indexOf('(');
    var rightSmallIndex = str.indexOf(')');

    var url = str.substring(leftSmallIndex + 1, rightSmallIndex);
    var text = str.substring(leftBigIndex + 1, rightBigIndex);

    rst.str = '<a href="' + url + '" style="font-size: 55px"> ' + text + ' </a>';

    if(!rst.str) rst.err = true;
    return rst;
};

module.exports = process;
