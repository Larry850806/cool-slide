var process = function(str){
    var rst = {
        nextMode: 0,  // NORMAL_MODE
        err: false,
        str: null
    }

    if(str.match(/^!\[\](.+)$/)){
        var src = str.substring(4, str.length - 1);
        rst.str = '<img src="' + src + '">';
    }

    if(!rst.str) rst.err = true;
    return rst;

    // ![](image.jpg)  ->  <img src="image.jpg">
};

module.exports = process;
