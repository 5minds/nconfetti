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

require('./../index.js'); // replace with require('nconfetti');

nconf.argv()
  .env('__');

nconf.use('Nconfetti', {path: path.resolve(__dirname, '../tests/configs/without_env')});

console.log(nconf.get('simple_config:entry'));
```

## Try a sample

- see sample/simple.js
- runit with
  - npm install
  - node samples/simple.js
 - have fun

## Description

After require `nconfetti` the backend will be added as storage backend
for `nconf`. Then it needs to be configired with `path`and `env`.

The backend support dereferencing of JSON pointers with a synchron usage
of [json-schema-deref](https://www.npmjs.com/package/json-schema-deref)

## Config parameter

- path: The path to load the config files from
- env: Add the environment to the config path.
- vars: A key value list of vars that will be evaluated within the config files
 (handlebars syntax is required)
