'use strict';

const path = require('path');

const nconf = require('nconf');

require('./../lib/nconfetti');

nconf.argv()
  .env('__');

nconf.use('Nconfetti', {path: path.join(__dirname, '..', 'tests', 'configs', 'env'), env: 'development'});

console.log(nconf.get('development_config:development_config'));


