var process = function(str){
    if(str.match(/^#[^#].*$/)) return '<h1>' + str.substring(1) + '</h1>';
    if(str.match(/^##[^#].*$/)) return '<h2>' + str.substring(2) + '</h2>';
    if(str.match(/^###[^#].*$/)) return '<h3>' + str.substring(3) + '</h3>';
    return 'format error';
    // # Hello  ->  <h1> Hello </h1>
    // ## Hello  ->  <h2> Hello </h2>
    // ### Hello  ->  <h3> Hello </h3>
}

module.exports = process;
