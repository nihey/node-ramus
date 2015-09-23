#!/usr/bin/env node

var meow = require('meow'),
    path = require('path')
    Ramus = require('../lib/index');


var config = require(path.join(process.cwd(), './ramus.json'));
config.forEach(function(settings) {
  settings.stdout = settings.stdout === undefined ? true : settings.stdout;
  settings.stderr = settings.stderr === undefined ? true : settings.stderr;

  var ramus = new Ramus(settings);
  ramus.exec(function(err, stdout, stderr) {
    settings.stdout && console.log(stdout);
    settings.stderr && console.log(stderr);
  });
});
