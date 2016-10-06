'use strict';

const nconf = require('nconf');

class Nconfdir extends nconf.Memory {

  get readOnly() {
    return true;
  }

  get type() {
    return 'Nconfdir';
  }

  get options() {
    return this._options;
  }

  get store() {
    return this._store;
  }

  constructor(options) {
    super();
    this._options = options;
    this._store = {hello: 'hello from Nconfdir'};
  }

  loadSync() {
    return this.store;
  }

  load(callback) {
    callback(this.store);
  }

}

nconf.Nconfdir = Nconfdir;

module.exports = Nconfdir;
