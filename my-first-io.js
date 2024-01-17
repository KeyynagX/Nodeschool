const file =  process.argv[2];
var fs = require('fs');
console.log(fs.readFileSync(file).toString().split('\n').length - 1);