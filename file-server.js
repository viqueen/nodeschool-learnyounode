/**
 * file-server.js
 * Copyright (C) 2014 
 * @author hasnaer <hasnae@escenic.com>
 */

var fs    = require('fs');
var http  = require('http');

var port = process.argv[2];
var filename = process.argv[3];

var server = http.createServer(function (request, response) {
  fs.createReadStream(filename).pipe(response);
});

server.listen(port);
