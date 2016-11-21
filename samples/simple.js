'use strict';

const path = require('path');

const nconf = require('nconf');

require('./../index.js');

nconf.argv()
  .env('__');

nconf.use('Nconfetti', {path: path.resolve(__dirname, '../tests/configs/env'), env: 'development'});

console.log(nconf.get('development_config:development_config'));


