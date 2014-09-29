/**
 * http-client.js
 * @author	: hasnaer (hasnae.rehioui@gmail.com)
 * @version	:
 */
var http = require('http');

http.get(process.argv[2],
    function (response) {
      response.setEncoding('utf8');
      response.on('data', console.log);
    });
