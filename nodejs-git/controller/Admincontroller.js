// // var express = require('express')

// // var route = express.Router();



// // route.get('/',function(req,res){


// // })

// // module.exports = route;



// var express = require('express')

// var adminroute = express.Router()

// adminroute.get('/',function(req,res){

//     res.send('hey admin how are things')

// })

// adminroute.get('/checking',function(req,res){

//     res.send('hope things are running fine')
    
// })

// module.exports = adminroute;



var express = require('express')

var adminroute = express.Router()

var register = express.Router()

adminlog = require('./Middleware')

adminroute.get('/',function(req,res){

    res.send('hello')


})


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


const {
    MongoClient
} = require('mongodb');
const {
    error
} = require("console");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://avinesh_26:100621rivi@avinesh.frrkapv.mongodb.net';
const client = new MongoClient(url);


register.post('/userset', async function main(req, res) {

  
    await client.connect();
    console.log('Connected successfully to server');
    const db = await client.db('credential')
    const collection = await db.collection('login')
    await collection.insertOne(req.body)
    
    res.send(req.body)
    

})

register.get('/userview', async function main(req, res) {

  
    await client.connect();
    console.log('Connected successfully to server');
    const db = await client.db('credential')
    const collection = await db.collection('login')
    let data = await collection.find().toArray()
    
    res.send({status:true},data)
    

})

register.post('/admincheck',adminlog.admincheck,function(req,res){

    res.send('user name and password success')


})


module.exports=register;



