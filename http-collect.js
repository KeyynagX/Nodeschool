"use strict";

let http = require('http');
let bl = require('bl');
let url = process.argv[2];
// http://example.com/
// http.get(url, function(res){
//     let rtnString = '';
//     res.setEncoding('utf8');
//     res.on('data', function(str){
//         rtnString += str.toString();
//     });
//     res.on('end', function(){
//         console.log(rtnString.length);
//         console.log(rtnString);
//     })
//     res.on('error',function(err){
//         console.error(err);
//     });
// })

http.get(url, function(res){
    res.pipe(bl(function(err, data){
        if(err) {
            return console.error(err) 
        }
        console.log(data.toString().length);
        console.log(data.toString());
    }))
})