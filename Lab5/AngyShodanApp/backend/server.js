const bodyParser = require('body-parser')
const path = require('path')
const express = require('express')
const fs = require('fs')
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const app = express()
const fetch = require('node-fetch')
const port = 3000

//node-fetch@2.6.6, express, body-parser

app.use(express.static(path.join(__dirname, '../frontend/lab4/dist/lab4')));
app.use(express.static(__dirname + '/public')); //did not work

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


function myfunct(item) {
    console.log(item)
}

const url_mongo = 'mongodb+srv://primaryUser:5oDennkTOjAknf8y@cluster0.jbtsz.mongodb.net/test?authSource=admin&replicaSet=atlas-tzykff-shard-0&readPreference=primary&appname=MongoDB+Compass&ssl=true';

app.route('/db')
    .get((req, res) => {
        MongoClient.connect(url_mongo, function (err, db) {
            if (err) throw (err);
            var dbo = db.db("testdb");
            dbo.collection("test").find({}).toArray(function(err, result) {
                if (err) throw (err);
                //console.log(result);
                //result.forEach(myfunct);
                res.json(result);
                // THIS OUTPUTS TO NODE'S CONSOLE. (FULL RESULT)
                //NEED TO SEND BACK TO FRONTEND
            })
        })
    })
    .post((req, res) => {
        console.log(req.body)
        MongoClient.connect(url_mongo, function (err, db) {
            if (err) throw (err);
            var dbo = db.db('testdb');
            dbo.collection("test").insertOne(req.body, (err, result) => {
                if(err) { 
                    //throw (err) 
                    res.json({post: "failed"})
                } else {
                    console.log("Document added succesfully")
                    res.json({post: "passed"})
                }
            })
        })
    })
    .put((req, res) => {
        console.log(req.body)
        MongoClient.connect(url_mongo, function(err, db) {
            if (err) throw (err)
            var dbo = db.db('testdb')
            upD = {$set: req.body}
            dbo.collection("test").updateMany({}, upD, (err, result) => {
                if (err) {
                    //throw (err)
                    res.json({update: "failed"})
                } else {
                    res.json({update: "passed"})
                }
            })
        })
    })


    
app.route('/db/:number')
    .get((req, res) => {
        doc_num = req.params.number
        console.log(doc_num)
        
        MongoClient.connect(url_mongo, function(err, db) {
            if (err) throw (err);
            var dbo = db.db('testdb')
            dbo.collection("test").find({doc_id: doc_num}).toArray(function(err, result) {
                if (err) throw (err)
                res.json(result)
                db.close()
                //THIS FUNCTION WORKS
                //RESULT IS OUTPUT TO NODE CONSOLE (REQUESTED DOCUMENT ONLY (USING doc_id key))
            })
        })

    })
    .put((req, res) => {
        doc_num = req.params.number
        console.log(req.body)

        MongoClient.connect(url_mongo, function(err, db) {
            if (err) throw (err)
            var dbo = db.db('testdb')
            upD = {$set: req.body}
            dbo.collection("test").updateOne({doc_id: doc_num}, upD, (err, result) => {
                if (err) {
                    res.json({update: "failed"})
                } else {
                    res.json({update: "passed"})
                }
            })
        })
        
    })
    .delete((req, res) => {
        res.json({test: "delete works?"})
    })


app.get('/', (req, res) => {
    res.json({test: 1})
})

app.get("/myIP", (req, res) => {

    let url = `https://api.shodan.io/tools/myip?key=IkOI4C20jw3Uq5fKd1ejWm7V7oaXrvuS`

    let settings = { method: "Get"}

    fetch(url, settings).then(res => res.json()).then((json) =>{
        res.json(json)
        console.log(json)
    })
 })

app.post("/postIP", (req, res) => {
    console.log(req.body.ip)

    var ip = req.body.ip

    let url = `https://api.shodan.io/shodan/host/${ip}?key=IkOI4C20jw3Uq5fKd1ejWm7V7oaXrvuS`

    let settings = { method: "Get"}

    fetch(url, settings).then(res => res.json()).then((json) =>{
        res.send(json)
        console.log(json)
    })
})


app.post("/getDNS", (req, res) => {
    console.log(req.body);
    var link = req.body.url
    //console.log(link)

    let url = `https://api.shodan.io/dns/resolve?hostnames=${link}&key=IkOI4C20jw3Uq5fKd1ejWm7V7oaXrvuS`

    let settings = { method: "Get"}


    fetch(url, settings).then(res => res.json()).then((json) =>{
        let url_2 = `https://api.shodan.io/shodan/host/${json[link]}?key=IkOI4C20jw3Uq5fKd1ejWm7V7oaXrvuS`

        fetch(url_2, settings).then(res => res.json()).then((json) =>{
            //console.log(json)
            res.status(200).send(json)
        })
    })
})

app.put("/putNOSOUP", (req, res) => {
    res.send("NO SOUP FOR YOU!")
})

app.delete("/deleteDINGO", (req, res) => {
    res.send("MAYBE THE DINGO ATE YOUR BABY")
})

app.listen(port, () => {
    console.log('Listening on port:', port)
})