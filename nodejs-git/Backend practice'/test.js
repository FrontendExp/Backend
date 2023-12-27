var http = require ('http')

http.createServer(function(req,res){

    if(req.url === '/welcome'){

        res.end('hi there user')
    }

    else if(req.url === '/contact'){

        res.end('7777777')
    }

    else if(req.url === '/basketball'){

        let data = {

            name:'avinesh',
            age:'22'
        }

        res.end(JSON.stringify(data))
    }




   


}).listen(9000);