#!/usr/bin/env node
var fs = require('fs');
var coolSlide = require('./index');

var mdname = process.argv[2];
var htmlname = process.argv[3];

if(!htmlname){
    console.log('usage: cool-slide demo.md demo.html');
    return;
}

var mdStr = fs.readFileSync(mdname).toString();
var htmlStr = coolSlide(mdStr);
fs.writeFileSync(htmlname, htmlStr);

console.log('finish');

