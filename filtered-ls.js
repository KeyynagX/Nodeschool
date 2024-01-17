"use strict";
let fs = require('fs');
let path = require('path');

let dirName = process.argv[2];
let extName =  '.' + process.argv[3];

fs.readdir(dirName, function(err, list){
    if(err){
        return console.error(err);
    }
    for(let file of list){
        if(path.extname(file) ==extName){
            console.log(file);
        }
    }
})