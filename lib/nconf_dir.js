'use strict';

const fs = require('fs');
const path = require('path');

const nconf = require('nconf');

const DirScanner = require('./dir_scanner');
const refResolver = require('./ref_resolver');

class Nconfdir extends nconf.Memory {

  get dir() {
    return this._dir;
  }

  get env() {
    return this._env;
  }

  get options() {
    return this._options;
  }

  get readOnly() {
    return true;
  }

  get store() {
    return this._store;
  }

  get type() {
    return 'Nconfdir';
  }

  get dirScanner() {
    return this._dirScanner;
  }

  constructor(options) {
    super();
    this._options = options;
    this._dir = options.dir;
    this._env = options.env || null;
    this._store = null;
    this._dirScanner = new DirScanner();
  }

  loadSync() {

    if (this.store === null) {
      const dir = this.getDirectory();

      const schema = this.dirScanner.scann(dir);

      this._store = refResolver(schema);
    }

    return this.store;
  }

  load(callback) {
    if (!this.store) {
      this.loadSync();
    }

    callback(this.store);
  }

  getDirectory() {
    const realpath = fs.realpathSync(this.dir);

    if (this.env === null) {

      const statsRealpath = fs.lstatSync(realpath);

      if (!statsRealpath.isDirectory()) {
        throw new Error(`Directory ${realpath} did'nt exist.`);
      }

      return realpath;
    }

    return this._buildExpandedDirectory(realpath);
  }

  _buildExpandedDirectory(realpath) {
    const envRealpath = path.join(realpath, this.env);

    const statsEnvRealPath = fs.lstatSync(envRealpath);

    if (!statsEnvRealPath.isDirectory()) {
      throw new Error(`Directory ${envRealpath} did'nt exist.`);
    }

    return envRealpath;
  }

}

nconf.Nconfdir = Nconfdir;

module.exports = Nconfdir;
