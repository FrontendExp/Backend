// var http = require("http");


// http.createServer(function(req,res){

//     console.log(req.url)

//     res.end('hi')

// }).listen(80);


// var htvtp = require("http")

// htvtp.createServer(function(req,res){
    
// if(req.url == "/Welcome"){
//     res.end("welcome")
// }

// else if(req.ur == "/About"){

//     res.end("Hi")
    
// }

// else if(req.url == "/Contact"){
//     res.end("77777")
// }
// else if(req.url == "/Bio"){
//     res.end("bio")

// }

// else{
//     res.end("HI")
// }




// }) .listen(8000)




// var fs = require('fs')

// var http = require('http')



// http.createServer(function(req,res){

//     fs.readFile('server.html', function(err,data){ //fs.readFile() this function is used to read file example the created server.html file will display while running

        

//         res.end(data);
    
        
    
    
//     })
// }) .listen(9000)






    // var https = require("http")


    // https.createServer(function(req,res){
    //     var fs = require('fs')
    //     if(req.url == "/About"){

    //         res.end("about")

            
    //     }

    //     else if(req.url == "/Welcome"){

    //         res.end("welcome")
    //     }

    //     else if(req.url == "contact"){

    //         res.end("8888888")

    //     }

    //     else{
    //         res.end("hello")
    //     }



    // fs.readFile("server.html", function(err,data){
    //     console.log(req)

    //     res.end(data)
        

    // })

        
    // }).listen(9000)




    var http = require ("http")

    var fs = require ("fs")


    http.createServer(function(req,res){

        fs.readFile('server.html',function(err,data){

             
        console.log(req)

        res.end(data)

            
        })

        
         
       
        

    //     if(req.url == '/about'){
    //         res.end("about")
    //     }
    //     else if(req.url == '/contact'){

    //         res.end("777777")
    //     }
    //     else if(req.url == '/welcome'){
    //         res.end('hi there')
    //     }
    // else{
    //     res.end('hello world')
    // }

        

    }).listen(8000)