let http = require('http');
let bl = require('bl');

let urls = process.argv.slice(2);
let table = {};

urls.forEach(url => {
    http.get(url, function(res){
        res.pipe(bl(function(err, data){
            if(err) return console.error(err);
            table[url] = data.toString();
            if(Object.keys(table).length === 3){
                urls.forEach( url => {
                    console.log(table[url]);
                })
            }
        }))
    })
    
});