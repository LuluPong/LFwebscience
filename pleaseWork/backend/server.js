const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const port = 3000

app.use(express.static(path.join(__dirname, '../frontend/quiz2/dist/quiz2')))

app.get('/', (req, res) => {
	res.send('Hello world!')
})

app.listen(port, () => {
	console.log('Listening on *:3000')
})