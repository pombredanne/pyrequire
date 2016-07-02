var pyrequire  = require('./../');
var test = pyrequire(__dirname + '/test.py');

console.log(!test(false));
