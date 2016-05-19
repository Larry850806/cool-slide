// Markwown
// [Q] 1 + 1 = ?
// [A] 1
// [A#] 2
// [A] 3
// [A] 4

// HTML
// <h1> 1 + 1 = ? </h1>
// <h3 class="ans wrong"> 1 </h3>
// <h3 class="ans correct"> 2 </h3>
// <h3 class="ans wrong"> 3 </h3>
// <h3 class="ans wrong"> 4 </h3>
// <script> setAnsAttr($(".ans"), $(".wrong"), $(".correct")); </script>

var QAmount = 0;

var process = function(str){
    // NORMAL_MODE 0
    // QUESTION_MODE 6

    var rst = {
        nextMode: 0,
        err: false,
        str: null
    };

    var ans = 'ans' + QAmount;
    var wrong = 'wrong' + QAmount;
    var correct = 'correct' + QAmount;

    var jqAns = '.' + ans;
    var jqWrong = '.' + wrong;
    var jqCorrect = '.' + correct;

    if(str.match(/^\[Q\]/)){            // question

        rst.str = '<h1>' + str.substring(3) + '</h1>';
        rst.nextMode = 6;

    } else if(str.match(/^\[A\]/)){     // wrong answer

        rst.str = '<h3 class=" ' + ans + ' ' + wrong + '">' + str.substring(3) + '</h3>';
        rst.nextMode = 6;

    } else if(str.match(/^\[A#\]/)){    // correct answer 

        rst.str = '<h3 class=" ' + ans + ' ' + correct + '">' + str.substring(4) + '</h3>';
        rst.nextMode = 6;

    } else {

        rst.str = '<script>setAnsAttr($("' + jqAns + '"), $("' + jqWrong + '"), $("' + jqCorrect + '"));</script>'
        rst.err = true;
        rst.nextMode = 0;
        QAmount++;
    }

    return rst;
};

module.exports = process;
