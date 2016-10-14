# nconf-dir

nconf-dir is a storage extension that support loading configuration files
from folder. The folder extend the namespace of the config-files with the
names of the folder where the files are located.

## Howto us it

```javascript
'use strict';

const path = reqiure('path');

const nconf = require('nconf');
require('nconf-dir');

nconf.argv()
  .env('__');
```
