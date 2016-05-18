var process = function(str){
    if(str.match(/^\[.+\](.+)$/)){   
        var leftBigIndex = str.indexOf('[');
        var rightBigIndex = str.indexOf(']');
        var leftSmallIndex = str.indexOf('(');
        var rightSmallIndex = str.indexOf(')');

        var url = str.substring(leftSmallIndex + 1, rightSmallIndex);
        var text = str.substring(leftBigIndex + 1, rightBigIndex);

        return '<a href="' + url + '" style="font-size: 55px"> ' + text + ' </a>';
    }
    return 'format error';
    // [Click Me](url)  ->  <a href="url"> Click Me </a>
};

module.exports = process;
