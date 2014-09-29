/**
 * juggling-async.js
 * @author	: hasnaer (hasnae.rehioui@gmail.com)
 * @version	:
 */
var http = require('http');
var concat = require('concat-stream');

var urls = process.argv.slice(2);
var output = [];
var count = 0;

urls.forEach(
  function (url, index) {
    http.get(url, function(response) {
      response.pipe(concat(function (buffer){
        output[index] = buffer.toString();
        if (++count == urls.length) {
          output.forEach(function (element) {
            console.log(element);
          });
        }
      }));
    });
  }
);
