const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const port = 3000

app.use(express.static(path.join(__dirname, '../frontend/quizDos/dist/quiz-dos')))

app.get('/test', (req, res) => {
    res.json(
        {
            "goo": "gaa",
            "mee": "mee",
            "moo": "moo"
        }
    )
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})