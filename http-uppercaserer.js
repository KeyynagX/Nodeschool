var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(request, response){
    response.writeHead(200, {'content-type':'text/pain'});
    request.pipe(map(function(chunk){
        return chunk.toString().toUpperCase();
    })).pipe(response);
})

server.listen(process.argv[2]);