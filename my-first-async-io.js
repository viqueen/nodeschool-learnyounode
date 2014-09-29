/**
 * my-first-async-io.js
 * Copyright (C) 2014 
 * @author hasnaer <hasnae@escenic.com>
 */
var fs = require('fs');

fs.readFile(
  process.argv[2], 
  'utf8',
  function (error, data) {
    if (!error) {
      console.log(data.split('\n').length - 1);
    }
  });
