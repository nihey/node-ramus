var exec = require('child_process').exec;

var Ramus = function(options) {
  Object.keys(options).forEach(function(key) {
    this[key] = options[key];
  }, this);
};

Ramus.prototype.exec = function(callback) {
  // Change directory if the user requires it
  this.process = exec(this.command, {
    cwd: this.cwd,
  }, callback);
};

module.exports = Ramus;
