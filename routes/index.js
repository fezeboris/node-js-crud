const express = require('express')
const router = express.Router()
const bookRouter = require('./book')
const path = require('path')
router.get('/', (req, res) => {
  res.render('index', {name: 'Conor boris'})
})

router.use(bookRouter)
router.all('/*', (req, res) => {
  res.send('page not found ')
})
module.exports = router
