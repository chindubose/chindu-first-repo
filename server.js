var http = require('http')

var port = 8080

var server = http.createServer(function (request, response) {

  console.log('New request: ' + request.url)  

  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('Hello World\n')
})

server.listen(port, "0.0.0.0")

console.log('Server running at http://localhost:' + port)
