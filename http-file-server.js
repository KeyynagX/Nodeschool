let http = require('http');
var fs = require('fs');
// const readStream = fs.createReadStream(filePath);

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })
  
    fs.createReadStream(process.argv[3]).pipe(res)
  }).listen(Number(process.argv[2]));

// http.createServer(function(_, response){
//     response.writeHead(200, {'content-type' : 'text/plain'});
//     readStream.pipe(response);    
//     console.log(readStream);
//     console.log("hofe");

//     response.end(str);
// }).listen(portNumber);


