const express = require('express');
const app = express();

app.param('id', function (req, res, next, id) {
    req.id = id
    next()
  })
app.put('/message/:id', function(req, res){ 
    let hash = require('crypto').createHash('sha1').update(new Date().toDateString() + req.id).digest('hex');
    res.end(hash);
});

app.listen(process.argv[2]);

