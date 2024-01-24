let net = require('net');
let strftime = require('strftime');

let answer = strftime('%Y-%m-%d %H:%M', new Date()) + '\n';

net.createServer(function(socket){
    socket.end(answer);
}).listen(process.argv[2]);

