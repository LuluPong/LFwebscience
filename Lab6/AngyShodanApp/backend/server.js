const bodyParser = require('body-parser')
const path = require('path')
const express = require('express')
const fs = require('fs')
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const app = express()
const fetch = require('node-fetch');
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


app.route('/lab6')
    .delete((req, res) => {
        MongoClient.connect(url_mongo, function(err, db) {
            if (err) throw (err)
            var dbo = db.db("testdb");
            dbo.collection("lab6").deleteMany({}, (err, result) => {
                if (err) {
                    res.status(500).json({delete: "failed"})
                } else {
                    res.status(200).json({delete: "successful"})
                }
            })
        })
    })


app.route('/db')
    .get((req, res) => {
        MongoClient.connect(url_mongo, function (err, db) {
            if (err) throw (err);
            var dbo = db.db("testdb");
            dbo.collection("test").find({}).toArray(function(err, result) {
                if (err) {
                    res.status(500).json({get: "failed"})
                } else {
                    res.status(200).json(result)
                }
            })
        })
    })
    .post((req, res) => {
        console.log(req.body.con)
        yg = req.body.con

        MongoClient.connect(url_mongo, function (err, db) {
            if (err) throw (err);
            var dbo = db.db('testdb');

            if (req.body.col == 'test collection') {
                dbo.collection("test").insertOne(req.body.con, (err, result) => {
                    if(err) {
                        res.status(500).json({post: "failed"})
                    } else {
                        res.status(200).json({post: "successful"})
                    }
                    db.close()
                })
            } else {

                if (yg.doc_id < 101) {
                    post_schema = 
                    {
                        "id": yg.doc_id,
                        "ip_address": yg.ip_str,
                        "organization": yg.org,
                        "country": yg.country_code,
                        "region": yg.region_code,
                        "ISP": yg.isp

                    }
                } else if (yg.doc_id < 201) {
                    post_schema = 
                    {
                        "id": yg.doc_id,
                        "ip_address": yg.properties.dns.a,
                        "organization": yg.properties.geo.org,
                        "country": yg.properties.geo.countrycode,
                        "region": yg.properties.geo.region,
                        "ISP": yg.properties.whois.registrar
                    }
                } else if (yg.doc_id < 301) {
                    post_schema = 
                    {
                        "id": yg.doc_id,
                        "ip_address": yg.data.items[0].hosts_enrichment[0].ip,
                        "organization": yg.data.items[0].hosts_enrichment[0].as_org,
                        "country": yg.data.items[0].cert_summary.subject.country,
                        "region": yg.data.items[0].whois_parsed.admin.province,
                        "ISP": yg.data.items[0].hosts_enrichment[0].isp
                    }
                } else if (yg.doc_id > 300) {
                    post_schema = 
                    {
                        "id": yg.doc_id,
                        "ip_address": yg.ip,
                        "organization": yg.org,
                        "country": yg.country_code,
                        "region": yg.region,
                        "ISP": yg.isp
                    }
                }

                dbo.collection("lab6").insertOne(post_schema, (err, result) => {
                    if (err) {
                        res.status(500).json({post: "failed"})
                    } else {
                        res.status(200).json({post: "successful"})
                    }
                    db.close()
                })
            }

            
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
                    res.status(500).json({update: "failed"})
                } else {
                    res.status(200).json({update: "passed"})
                }
                db.close()
            })
        })
    })
    .delete((req, res) => {
        MongoClient.connect(url_mongo, function(err, db) {
            if (err) throw (err)
            var dbo = db.db('testdb')
            dbo.collection("test").deleteMany({}, (err, result) => {
                if (err) {
                    res.status(500).json({deletion: "failed"})
                } else {
                    res.status(200).json({deletion: "successful"})
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

            if (Number(doc_num) > 0) {
                dbo.collection("test").find({doc_id: Number(doc_num)}).toArray(function(err, result) {
                    if (err) throw (err)
                    res.status(200).json(result)
                    db.close()
                    //THIS FUNCTION WORKS
                    //RESULT IS OUTPUT TO NODE CONSOLE (REQUESTED DOCUMENT ONLY (USING doc_id key))
                })
            } else if (Number(doc_num) == 0) {
                dbo.collection("lab6").find({}).toArray(function(err, result) {
                    if (err) {
                        res.status(500).json({retrieval: "failed"})
                    } else {
                        res.status(200).json(result)
                    }
                })
            } else {
                let sub = Math.abs(Number(doc_num))
                dbo.collection("lab6").find({id: sub}).toArray(function(err, result) {
                    if (err) {
                        res.status(500).json({retrieval: "failed"})
                    } else {
                        res.status(200).json(result)
                    }
                })
            }
        })

    })
    .put((req, res) => {
        doc_num = req.params.number
        console.log(req.body)
        MongoClient.connect(url_mongo, function(err, db) {
            if (err) throw (err)
            var dbo = db.db('testdb')

            if (Number(doc_num) > 0) {
                upD = {$set: req.body}
                dbo.collection("test").updateOne({doc_id: Number(doc_num)}, upD, (err, result) => {
                    if (err) {
                        res.json({update: "failed"})
                    } else {
                        res.json({update: "successful"})
                    }
                    db.close()
                })
            } else {
                upD = {$set: req.body}
                dbo.collection("lab6").updateMany({}, upD, (err, result) => {
                    if (err) {
                        res.status(500).json({update: "failed"})
                    } else {
                        res.status(200).json({update: "successful"})
                    }
                    db.close()
                })
            }
        })
        
    }).post((req, res) => {
        res.json({post: "invalid"})
    })
    .delete((req, res) => {
        doc_num = req.params.number

        MongoClient.connect(url_mongo, function(err, db) {
            if (err) throw (err)
            var dbo = db.db('testdb')

            if (Number(doc_num) > 0) {
                dbo.collection("test").deleteOne({doc_id: Number(doc_num)}, (err, result) => {
                    if (err) {
                        res.json({deletion: "failed"})
                    } else {
                        res.json({deletion: "successful"})
                    }
                    db.close()
                })
            } else {
                dbo.collection("lab6").deleteMany({}, (err, result) => {
                    if (err) {
                        res.status(500).json({deletion: "failed"})
                    } else {
                        res.status(200).json({deletion: "successful"})
                    }
                    db.close()
                })
            }
        })

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