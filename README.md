# PyRequire
*Require python with node*

---

## What is pyrequire?

Pyrequire is a nodejs module (available on [npm](https://www.npmjs.com/)) that allows users to "require" python as if it was a javascript file.

---

## Installation

```npm install pyrequire```

---
## How to use

First, we require pyrequire:
```javascript
var pyrequire = require('pyrequire');
```

Then, import the python file as you would have normally done instead this time, we replace ```require``` with ```pyrequire``` (or hover you defined the pyrequire module when you required it)

```javascript
var test = pyrequire(__dirname + '/script.py');
```

In the python file that you require, the exports must be in a global function called ```exports```

```python
def exports(arg1, arg2, arg3):
    # Do your magic and then return it.
```

View the section [Example](#Example) for a working example of what we just learned.

---
## Example

#### index.js
```javascript
var pyrequire = require('pyrequire');
var test = pyrequire(__dirname + '/script.py');

console.log(JSON.stringify(test('uppercase', 'LowerCASE', 'capitalize this thing.')));
/*
    Should return:
    {"lowercase":"lowercase","uppercase":"UPPERCASE","capitalize":"Capitalize this thing."}
*/
```

#### script&#46;py
```python
def exports(uppercase, lowercase, capitalize):
    return {
        "uppercase": uppercase.upper(),
        "lowercase": lowercase.lower(),
        "capitalize": capitalize.capitalize()
    }
```

---
## License (MIT)

Copyright (c) 2016 Riley Denoyer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
