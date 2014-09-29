/**
 * filtered-ls.js
 * Copyright (C) 2014 
 * @author hasnaer <hasnae@escenic.com>
 */

var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(
    directory,
    function (error, files) {
      if (!error) {
        files.filter(function(file){return path.extname(file) == ext;})
             .forEach(function(file){console.log(file);});
      }
    }
  );
