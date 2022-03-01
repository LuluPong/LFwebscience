const bodyParser = require('body-parser')
const express = require('express')
const fs = require('fs')
const app = express()
const fetch = require('node-fetch')
const port = 3000

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//430e031680247a3fe3aaecd6ff3d69cf

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + "/index.html")
})

app.post('/temperature', (req, res) => {
    console.log(req.body);
    let userZIP = req.body.zip_code;

    let settings = { method: "Get"}
    let url = `http://api.openweathermap.org/data/2.5/weather?zip=${userZIP},us&appid=430e031680247a3fe3aaecd6ff3d69cf`;

    fetch(url, settings).then(res => res.json()).then((json) =>{
        res.send(json)
        console.log(json)
    })

    res.json({temp: 87});
})

app.get('/wind', (req, res) => {
    let url = `http://api.openweathermap.org/data/2.5/weather?zip=12180,us&appid=430e031680247a3fe3aaecd6ff3d69cf`;

    let settings = { method: "Get"}

    fetch(url, settings).then(res => res.json()).then((json) =>{
        res.send(json)
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

app.listen(port, () => {
    console.log('Listening on port:', port)
})