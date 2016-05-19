// # Hello  ->  <h1> Hello </h1>
// ## Hello  ->  <h2> Hello </h2>
// ### Hello  ->  <h3> Hello </h3>

var process = function(str){
    var rst = {
        nextMode: 0,  // NORMAL_MODE
        err: false,
        str: null
    }

    if(str.match(/^#[^#].*$/)) rst.str = '<h1>' + str.substring(1) + '</h1>';
    else if(str.match(/^##[^#].*$/)) rst.str = '<h2>' + str.substring(2) + '</h2>';
    else if(str.match(/^###[^#].*$/)) rst.str = '<h3>' + str.substring(3) + '</h3>';

    if(!rst.str) rst.err = true;
    return rst;
}

module.exports = process;
