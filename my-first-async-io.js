const file =  process.argv[2];
var fs = require('fs');
fs.readFile(file, function(_, data){
    console.log(data.toString().split('\n').length - 1);
})