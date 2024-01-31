const express = require('express');
const app = express();
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false}))
app.post('/path', function(req, res){

})

app.listen(process.argv[2]);