/**
 * http-uppercaserer.js
 * Copyright (C) 2014 
 * @author hasnaer <hasnae@escenic.com>
 */
var tmap  = require('through2-map');
var http  = require('http');

var server = http.createServer(function (request, response) {
  if (request.method == 'POST') {
    request.pipe(tmap(function (data){
      return data.toString().toUpperCase();
    })).pipe(response);
  }
});

server.listen(process.argv[2]);
