var http = require('http')
var fs = require('fs')
http.createServer(function(req,res){

    fs.readFile('server.html',function(err,data){

        
        res.end(data)
    })

  

    if(req.url === '/about'){
        res.end('this is kobe bryant')
    }
    else if(req.url === '/contact'){
        res.end('cant give my number yo!')
    }
    else if(req.url === '/welcome'){
        res.end('hey Champ');
    }
    else{
        res.end('something went wrong')
    }

    


}).listen(9000);



var { URL } = require('url');

var q = new URL('https://chat.openai.com/');

console.log(q.hostname);