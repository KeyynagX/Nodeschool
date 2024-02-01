const express = require('express');
const app = express();

app.get('/search', function(req, res){ 
    console.log(req.query)
    res.send(req.query);
});

app.listen(process.argv[2]);

