const lines =  process.argv

let sum = 0;
for(let line of lines){
    if(!isNaN(line)){
        sum += Number(line);
    }
}

console.log(sum);