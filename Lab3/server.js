const bodyParser = require('body-parser')
const express = require('express')
const fs = require('fs')
const app = express()
const fetch = require('node-fetch')
const port = 3000

//node-fetch@2.6.6, express, body-parser

app.use(express.static(__dirname + '/public')); //did not work

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/pages/index.html")
})

app.post("/postMyIP", (req, res) => {

    let url = `https://api.shodan.io/tools/myip?key=IkOI4C20jw3Uq5fKd1ejWm7V7oaXrvuS`

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


app.get("/getDNS", (req, res) => {
    var link = req.query.link
    console.log(link)

    let url = `https://api.shodan.io/dns/resolve?hostnames=${link}&key=IkOI4C20jw3Uq5fKd1ejWm7V7oaXrvuS`

    let settings = { method: "Get"}


    fetch(url, settings).then(res => res.json()).then((json) =>{
        let url_2 = `https://api.shodan.io/shodan/host/${json[link]}?key=IkOI4C20jw3Uq5fKd1ejWm7V7oaXrvuS`

        fetch(url_2, settings).then(res => res.json()).then((json) =>{
            console.log(json)
            res.send(json)
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