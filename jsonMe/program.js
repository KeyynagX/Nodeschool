const express = require('express');
const fs = require('fs');
let path = require('path');
const app = express();



app.get('/books', function(req, res){ 
    fs.readFile(process.argv[3],  'utf-8', function(err, data){

        // res.json(data.toString());
        const jsonData = JSON.parse(data); // 文字列としての JSON をパース
        res.json(jsonData);
    })
});

app.listen(process.argv[2]);
