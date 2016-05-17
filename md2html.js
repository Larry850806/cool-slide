var md2html = function(str){

    if(str.match(/^#[^#].*$/)){             // # Hello  ->  <h1> Hello </h1>

        return '<h1>' + str.substring(1) + '</h1>';

    } else if(str.match(/^##[^#].*$/)){     // ## Hello  ->  <h2> Hello </h2>
        
        return '<h2>' + str.substring(2) + '</h2>';

    } else if(str.match(/^###[^#].*$/)){    // ### Hello  ->  <h3> Hello </h3>

        return '<h3>' + str.substring(3) + '</h3>';

    } else {
        
        return str;

    }
}

module.exports = md2html;
