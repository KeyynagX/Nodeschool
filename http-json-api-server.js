const http = require('http');
const urlModule = require('url');

const server = http.createServer((req, res) => {
    let rtnJson = '';
    const url = urlModule.parse(req.url, true)
    
    if(req.method === 'GET'){
        const date = new Date(url.query.iso); 

        switch(url.pathname){
            case  '/api/parsetime':
                rtnJson = JSON.stringify({'hour' : date.getHours(), 'minute' : date.getMinutes(), 'second' : date.getSeconds()});
            break;

            case '/api/unixtime':
                rtnJson = JSON.stringify({'unixtime' : date.getTime()});
            break;

        }
    }
    
    res.end(rtnJson);

})
server.listen(process.argv[2]);