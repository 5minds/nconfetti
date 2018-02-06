'use strict';

const path = require('path');

const nconf = require('nconf');

require('./../index.js'); // replace with require('nconfetti');

nconf.argv()
  .env('__');

nconf.use('Nconfetti', {path: path.resolve(__dirname, '../tests/configs/without_env')});

console.log(nconf.get('simple_config:entry'));
