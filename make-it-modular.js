var readDirModule = require('./mymodule.js');

let dirName = process.argv[2];
let ext =  process.argv[3];

function callback(err, fileterdList){
    if(err){
        return console.error(err);
    }

    for(let i = 0; i < fileterdList.length; i++){
        console.log(fileterdList[i]);
    }
}

readDirModule(dirName, ext, callback);