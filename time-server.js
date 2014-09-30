/**
 * time-server.js
 * Copyright (C) 2014 
 * @author hasnaer <hasnae@escenic.com>
 */
var net       = require('net');
var strftime  = require('strftime');

var server = net.createServer(function (socket) {
  socket.end(strftime('%F %H:%M\n', new Date()));
});
server.listen(process.argv[2]);
