var setAnsAttr = function(allAns, wrongAns, correctAns){
    allAns.css('background-color', '#00CC66');
    console.log(allAns);
    //$('.ans').css('background-color', '#EED19C');
    wrongAns.click(function(event){
        wrongAns.css('background-color', 'red');
        alert('你選了' + $(event.target).text() +'，答錯了');
        allAns.unbind('click');
    });

    correctAns.click(function(event){
        wrongAns.css('background-color', 'red'); 
        alert('你選了' + $(event.target).text() +'，你好聰明.');
        allAns.unbind('click');
    });
}
