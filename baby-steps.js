/**
 * baby-steps.js
 * Copyright (C) 2014 
 * @author hasnaer <hasnae@escenic.com>
 */
var sum = process.argv.slice(2)
  .map(function (param) { return +param;})  // convert to number
  .reduce(function (a, b) {return a + b;}); // sum

console.log(sum);
