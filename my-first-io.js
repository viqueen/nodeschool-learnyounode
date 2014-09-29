/**
 * my-first-io.js
 * Copyright (C) 2014 
 * @author hasnaer <hasnae@escenic.com>
 */

var fs = require('fs');
var data = fs.readFileSync(process.argv[2]).toString();
var lineCount = data.split('\n').length - 1;
console.log(lineCount);
