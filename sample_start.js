'use strict';

const path = require('path');

const nconf = require('nconf');

require('./lib/nconf_dir');

nconf.argv()
  .env('__');

nconf.use('Nconfdir', {dir: path.join(__dirname, 'config')});

console.log(nconf.get('title'));

console.log(nconf.get('hello'));
console.log(nconf.get('port'));
console.log(nconf.get('world:country'));
console.log(nconf.get());

