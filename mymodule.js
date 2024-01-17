"use strict";
let fs = require('fs');
let path = require('path'); 

module.exports = function (dirName, ext, callback){
    let filteredList = [];

    fs.readdir(dirName, function(err, list){
        if(err) return callback(err, []);
        for(let file of list){
            if(path.extname(file) == '.' + ext){
                filteredList.push(file);
            }
        }
        callback(err, filteredList);
    })

    
}

