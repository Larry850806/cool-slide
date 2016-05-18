var process = function(str){
                                                    // function(){              ->  <pre><code>function(){     
        if(current_mode == CODE_MODE){              //     var a = 123;         ->  var a = 123;                    
            current_mode = NORMAL_MODE;             //     console.log('123');  ->  console.log('123');
            return mode_buffer + '</code></pre>';   // }                        ->  </code></pre>
        } else {                                    // ```                     
            current_mode = CODE_MODE;
            mode_buffer = '<pre><code>';
            return '';
        }

};

module.exports = process;
