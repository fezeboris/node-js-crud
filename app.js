const http = require('http')
const fs = require('fs')
const PORT = 4000
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.writeFile('pages/test.html', '<h1>This is test file</h1>', (err, data) => {

      if (err) {
        throw err
      }
      res.write(' file is created')
      res.end()
    })
  }else if (req.url === '/about') {
    fs.readFile('pages/about.html', 'utf8', (err, data) => {

      if (err) {
        throw err
      }
      res.write(data)
      res.end()
    })
  }else {
    fs.readFile('pages/404.html', 'utf8', (err, data) => {

      if (err) {
        throw err
      }
      res.write(data)
      res.end()
    })
  }
})
console.log(`server is running at http://localhost:${PORT}`)
server.listen(PORT)
