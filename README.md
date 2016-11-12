# nconfetti

nconfetti is a storage extension that support loading configuration files
from folder. The folder extend the namespace of the config-files with the
names of the folder and the filename without extension where the files are
located.

## Howto use it

```javascript
'use strict';

const path = require('path');

const nconf = require('nconf');
require('./lib/nconfetti');

const dir = path.join(__dirname, 'tests', 'configs', 'env');

nconf.argv()
  .env('__');

nconf.use('Nconfetti', {dir: dir, env: process.env.NODE_ENV});

console.log(nconf.get('development_config:development_config'));


```
