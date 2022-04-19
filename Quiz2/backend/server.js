const express = require('express')
const app = express()
const axios = require('axios')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const path = require('path')
const port = 3000

app.use(express.static(path.join(__dirname, '../frontend/quizDos/dist/quiz-dos')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const url_mongo = 'mongodb+srv://primaryUser:5oDennkTOjAknf8y@cluster0.jbtsz.mongodb.net/test?authSource=admin&replicaSet=atlas-tzykff-shard-0&readPreference=primary&appname=MongoDB+Compass&ssl=true';

app.route('/mongo')
    .get((req, res) => {
        MongoClient.connect(url_mongo, function (err, db) {
            if (err) throw (err);
            var dbo = db.db("testdb");
            dbo.collection("quiz2new").find({}).toArray(function (err, result) {
                if (err) {
                    res.status(500).json({ get: "failed" })
                } else {
                    res.json(result)
                }
            })
        })
    })
    .post((req, res) => {
        MongoClient.connect(url_mongo, function (err, db) {
            if (err) throw (err);
            var dbo = db.db('testdb');
            dbo.collection("quiz2new").insertOne(req.body, (err, result) => {
                if (err) {
                    res.status(500).json({ post: "failed" })
                } else {
                    res.json({ post: "successful" })
                }
                db.close()
            })
        })
    })
    .put((req, res) => {
        MongoClient.connect(url_mongo, function (err, db) {
            if (err) throw (err)
            var dbo = db.db('testdb')
            upD = { $set: req.body }
            dbo.collection("quiz2new").updateMany({}, upD, (err, result) => {
                if (err) {
                    //throw (err)
                    res.status(500).json({ update: "failed" })
                } else {
                    res.json({ update: "passed" })
                }
                db.close()
            })
        })
    })
    .delete((req, res) => {
        MongoClient.connect(url_mongo, function (err, db) {
            if (err) throw (err);
            var dbo = db.db("testdb");
            dbo.collection("quiz2new").deleteMany({}, (err, result) => {
                if (err) {
                    res.json({ get: "failed" })
                } else {
                    res.json(result)
                }
            })
        })
    })

app.route('/mongo/:number')
    .get((req, res) => {
        doc_num = req.params.number
        MongoClient.connect(url_mongo, function (err, db) {
            if (err) throw (err);
            var dbo = db.db('testdb')
            dbo.collection("quiz2new").find({ Rank: doc_num }).toArray(function (err, result) {
                if (err) {
                    res.status(500).json({"retrieval": "failed"})
                }
                res.json(result)
                db.close()
                //THIS FUNCTION WORKS
            })
        })
    })
    .post((req, res) => {
        res.status(500).send("Cannot post to specific document. Please post to entire collection.")
    })
    .put((req, res) => {
        doc_num = req.params.number
        MongoClient.connect(url_mongo, function (err, db) {
            if (err) throw (err)
            var dbo = db.db('testdb')
            upD = { $set: req.body }
            dbo.collection("quiz2new").updateOne({ Rank: doc_num }, upD, (err, result) => {
                if (err) {
                    res.status(500).json({ update: "failed" })
                } else {
                    res.json({ update: "successful" })
                }
                db.close()
            })
        })
    })
    .delete((req, res) => {
        doc_num = req.params.number
        MongoClient.connect(url_mongo, function (err, db) {
            if (err) throw (err)
            var dbo = db.db('testdb')
            dbo.collection("test").deleteOne({ Rank: doc_num }, (err, result) => {
                if (err) {
                    res.status(500).json({ deletion: "failed" })
                } else {
                    res.json({ deletion: "successful" })
                }
                db.close()
            })
        })
    })

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})