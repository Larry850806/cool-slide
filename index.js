#!/usr/bin/env node
var Output = require('./output');
var Input = require('./input');

var mdname = process.argv[2];
var htmlname = process.argv[3];

if(!htmlname){
    console.log('usage: cool-slide demo.md demo.html');
    return;
}

var output = new Output(htmlname);

var funcMap = [];

funcMap['---'] = function(line){
    output.addNewChapter();
    output.addNewSlide();
};

funcMap['----'] = function(line){
    output.addNewSlide();
};

var funcDefault = function(line){
    output.addStrIntoSlide(line);
};

var funcPrintHTML = function(){
    output.printHTML();
};

var input = new Input(mdname);
input.process(funcMap, funcDefault, funcPrintHTML);




