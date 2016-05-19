// ```
// function(){              ->  <pre><code>function(){
//     var a = 123;         ->  var a = 123; 
//     console.log('123');  ->  console.log('123');
// }                        ->  </code></pre>
// ```

var firstQuote = true;
var firstCodeLine = true;

var process = function(str){
    // NORMAL_MODE 0
    // CODE_MODE 5
    
    if(str === '') str = ' ';

    var rst = {
        nextMode: 0,
        err: false,
        str: null
    };

    if(str.match(/^```/)){
        if(firstQuote){         // firstQuote
            rst.nextMode = 5;
            firstQuote = false;
        } else {                // lastQuote
            rst.nextMode = 0;
            rst.str = '</code></pre>';
            firstQuote = true;
            firstCodeLine = true;
        }
    } else {
        rst.nextMode = 5;
        rst.str = str;
        if(firstCodeLine){      // first line in code
            rst.str = '<code><pre>' + rst.str;
            firstCodeLine = false;
        }
    }
                                                        
    return rst;
};

module.exports = process;

