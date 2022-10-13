const { log } = require('console')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 5000
const routes = require('./routes/index')
app.use(bodyParser.json())
app.set('view engine', 'pug')
app.use(routes)
app.get('/', (req, res) => {
  res.send('Hello world')
})
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`)
})
