var express = require ('express')

app = express()


// Connection URL

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

const {
    MongoClient
} = require('mongodb');
const url = 'mongodb+srv://avinesh_26:100621rivi@avinesh.frrkapv.mongodb.net';
const client = new MongoClient(url);

app.get('/viewdata', async function main(req, res) {

    console.log(req.body)
    console.log('Connected successfully to server');
    const db = await client.db('sample')
    const collection = await db.collection('testing')
    let data = await collection.find().toArray()
    
   res.send({status:true,data})

   





})

app.post('/setdata', async function main(req, res) {

    console.log(req.body)
    console.log('Connected successfully to server');
    const db = await client.db('sample')
    const collection = await db.collection('testing')
    await collection.insertOne(req.body)
    
   res.send({status:true})

   





}).listen(5000);

