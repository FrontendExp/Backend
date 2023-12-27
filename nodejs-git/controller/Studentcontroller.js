// // var express = require('express')

// // var studentroute = express.Router();

// // var um = require('./Middleware');



// // studentroute.get('/child1',um.usercheck,function(req,res){

// // res.send('hellostudent1');
// // })


// // studentroute.get('/child2',function(req,res){

// //     res.send('hellostudent2');
// //     });

// // module.exports = studentroute;




// var express = require('express')

// var studentroute = express.Router();

// var entry  = require('./Middleware')

// studentroute.get('/',function(req,res){

//     res.send('nothing')
// })

// studentroute.get('/welcome',entry.entrycheck,function(req,res){

//     res.send('Hey there student welcome')
// })

// module.exports = studentroute;


var express = require('express')

var studentroute = express.Router()

studentroute.get('/',function(req,res){

    res.send('hey student')
})

module.exports=studentroute