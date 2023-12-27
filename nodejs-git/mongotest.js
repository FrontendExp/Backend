var express = require("express")

app = express()

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

app.get('/', function (req, res) {

    res.send("nothing here")


})

app.get('/getdata', async function main(req, res) {

    try {
        await client.connect();
        console.log('Connected successfully to server');
        const db = await client.db('sample')
        const collection = await db.collection('testing')
        let data = await collection.find({category:'laptop'}).toArray()

        res.send({
            status: true,
            data
        })
    } catch (error) {
        console.error('Error', error);
        res.send({
            status: false,
            error: error.message
        });

    }

})


app.post('/savedata', async function main(req, res) {

    console.log(req.body)
    console.log('Connected successfully to server');
    const db = await client.db('sample')
    const collection = await db.collection('testing')
    await collection.insertOne(req.body);

    if (res !== ('')) {

        res.send({
            status: true,
        })

    } else {
        res.sen("error")
    }




})


app.post('/deletedata', async function main(req, res) {

    await client.connect();
    console.log('Connected successfully to server');
    const db = await client.db('sample')
    const collection = await db.collection('testing')
    let data = await collection.deleteOne({
        name: "msi",
        category: "laptop"
    })

    res.send({
        status: true,
        data
    })
})



app.post('/aggregate', async function main(req, res) {

    try {
        await client.connect();
        console.log('Connected successfully to server');
        const db = await client.db('sample')
        const collection = await db.collection('testing')
        let data = await collection.aggregate([{
            $match: {
                category: "laptop"
            }

        }, {

            $group:{_id:'$category',count:{$sum:1}}

        }, {
            $sort: {
                category:1
            }
        },]).toArray()
        res.send({
            status: true,
            data
        })
    } catch (error) {
        console.error('error', error)
        res.send({
            status: false,
            error: error.message
        });
    }
})




app.get('/about', function (req, res) {

    let data = {
        name: "avinesh",
        age: 22,
        occupation: 'developer',
        address: 'chennai'
    }

    if (data !== ('')) {

        res.send({
            status: true,
            data
        })
    } else {
        res.send('error')
    }




}).listen(8000)