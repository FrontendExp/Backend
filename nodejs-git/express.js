// var express = require('express')

// var app = express()

// app.get('/',function(req,res){

//     res.send()
// })


// app.get('/getList',function(req,res){

//     res.send({status:true});

// })
// app.listen(8080);


// var express = require("express")

// app = express()

// app.get('/',function(req,res){

//     res.send()



// })

// app.get('/hello',function(req,res){


//     res.send({status:true})

// }).listen(2000)







var express = require('express')

app = express()

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
app.get('/', async function (req, res) {

    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db('facebook');
    const collection = db.collection('post');

    res.send('')

})


app.get('/getlist', async function (req, res) {

    await client.connect();
    console.log('Connected successfully to server');
    const db = await client.db('facebook');
    const collection = await db.collection('post');
    let data = await collection.aggregate(
        [
            {
                $project:{
                    "title":1,
                    "category":1
                    
                }
                
                
            },
            {
                $limit:3
            }
         ]
    ).toArray()


    res.send({

        status: true,
        return: data

    })

})

app.post('/savelist', async function (req, res) {

    console.log()

    await client.connect();
    console.log('Connected successfully to server');
    const db = await client.db('facebook');
    const collection = await db.collection('post');
    await collection.insertOne(req.body);

    res.send({

        status: true

    })

})

app.post('/deletelist', async function (req, res) {




    console.log()
    await client.connect();
    console.log('Connected successfully to server');
    const db = await client.db('facebook');
    const collection = await db.collection('post');
    let result = await collection.deleteOne({
        title:req.body.title
    
    
    })
console.log(result)



    res.send({


        status: true

    })




})

app.post('/savelist', async function (req, res) {

    console.log()

    await client.connect();
    console.log('Connected successfully to server');
    const db = await client.db('facebook');
    const collection = await db.collection('post');
    await collection.insertOne(req.body);

    res.send({

        status: true

    })

})



app.post('/updatelist/:t', async function (req, res) {

    console.log(req.params.title)

    let ttl = req.params.t


    await client.connect();
    console.log('Connected successfully to server');
    const db = await client.db('facebook');
    const collection = await db.collection('post');
    let result = await collection.updateOne({title:ttl},{$set:req.body});
    console.log(result)
    res.send({

        status: true

    })

})


app.get('/total', function (req, res) {

    res.send({
        status: true
    })

}).listen(3000);