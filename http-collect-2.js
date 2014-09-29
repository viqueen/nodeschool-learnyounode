/**
 * http-collect-2.js
 * @author	: hasnaer (hasnae.rehioui@gmail.com)
 * @version	:
 */
var http = require('http');
var concat = require('concat-stream');

http.get(process.argv[2],
    function (response) {
      response.pipe(
        concat(
          function (buffer) {
            var data = buffer.toString();
            console.log(data.length);
            console.log(data);
          }
        )
      );
    });
