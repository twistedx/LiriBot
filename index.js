var inq = require("Inquirer");

const selection = ["streaming", "services", "science", "technology"];

var pickMyWord = function() {
  var tempNum = Math.floor(Math.random() * selection.length);
  return selection[tempNum];
};
