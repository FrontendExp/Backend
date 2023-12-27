// 


var express = require('express')



var userroute = express.Router()




var login = require('./Middleware')

userroute.get('/',function(req,res){

    res.send('hey user')
})



app.get('/', function (req, res) {

    res.send("nothing here")


})





userroute.get('/check',login.logincheck,function(req,res){

    res.send('hey there maa!')
})
module.exports=userroute