"use strict";

let http = require('http');

let url = process.argv[2];
http.get(url, function(res){
    res.setEncoding('utf8');
    res.on('data', function(str){
        console.log(str);
    })
})