var pyrequire  = require('./../');
var test = pyrequire(__dirname + '/test.py');

console.log(JSON.stringify(test('uppercase', 'LowerCASE', 'capitalize this thing.')));
