'use strict';

const http = require('http');
const port = 3000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{ "message": "Hello World" }');
}).listen(port);
 
console.log('Server listening at '+port);