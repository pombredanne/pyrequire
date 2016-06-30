#!/usr/bin/env node

module.exports = (function() {
	return function(file) {
		if (typeof file != 'string') {
			throw 'File must be a string.';
		}

		return function() {
			var fs = require('fs');
			var child_process = require('child_process');
			var args = [];

			fs.writeFileSync(__dirname + '/temp/__init__.py', fs.readFileSync(file, 'utf8'), 'utf8');

			for (var i = 0; i < arguments.length; i++) {
				if (typeof arguments[i] === 'undefined' || arguments[i] === null) {
					args.push('NULL*');
				} else if (typeof arguments[i] === 'object') {
					args.push('OBJECT*' + JSON.stringify(arguments[i]));
				} else if (typeof arguments[i] === 'boolean') {
					args.push('BOOL*' + arguments[i].toString());
				} else {
					args.push('STRING*' + arguments[i].toString());
				}
			}

			var res = child_process.execFileSync('python3', [__dirname + '/pyrequire.py', file, JSON.stringify(args)]);
			var new_res;
			res = res + '';

			if (res.indexOf('OBJECT*') === 0) {
				new_res = JSON.parse(res.substring('OBJECT*'.length));
			} else if (res.indexOf('BOOL*') === 0) {
				new_res = res.substring('BOOL*'.length) === true ? false : true;
			} else if (res === 'NULL*') {
				new_res = null;
			} else {
				new_res = res.substring('STRING*'.length);
			}

			return new_res;
		};
	}
}());
