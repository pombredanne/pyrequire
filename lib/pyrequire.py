#!/usr/bin/env python3
import sys
import json

from temp import exports

args = json.loads(sys.argv[2]);

new_args = [];

for x in args:
    if (x.find('OBJECT*') == 0):
        new_args.append(json.loads(x[len('OBJECT*'):]));
    elif (x == 'NULL*'):
        new_args.append(None);
    else:
        new_args.append(x[len('STRING*'):]);

res = (exports(*new_args));

if (str(type(res)) == "<class 'dict'>"):
    print('OBJECT*{0}'.format(json.dumps(res)));
elif (res in None):
    print('NULL*');
else:
    print('STRING*{0}'.format(res));
