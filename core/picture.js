var process = function(str){
    if(str.match(/^!\[\](.+)$/)){
        var src = str.substring(4, str.length - 1);
        return '<img src="' + src + '">';
    }
    return 'format error';
    // ![](image.jpg)  ->  <img src="image.jpg">
};

module.exports = process;
