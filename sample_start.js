'use strict';

const path = require('path');

const nconf = require('nconf');

require('./lib/nconf_dir');

nconf.argv()
  .env('__');

nconf.use('Nconfdir', {dir: path.join(__dirname, 'tests', 'configs', 'env'), env: 'development'});

console.log(nconf.get('development_config:development_config'));


