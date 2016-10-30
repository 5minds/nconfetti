'use strict';

const fs = require('fs');
const path = require('path');

const nconf = require('nconf');

const dirScanner = require('./dir_scanner');
const refResolver = require('./ref_resolver');

/**
 * Nconf backend that support Directories with json config files.
 * Each directory and file will be used as namespace.
 */
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

  /**
   * Constructor to create a new version of the nconf dir backend.
   *
   * @constructor
   *
   * @param {object} options - The configuration option for the backend with
   *          dir: As string for the start directory to scann for config files.
   *          env: The environment to use. If is null, the env will ignored.
   */
  constructor(options) {
    super();
    this._options = options;
    this._dir = options.dir;
    this._env = options.env || null;
    this._store = null;
  }

  /**
   * Load the configuration synchrone.
   *
   * @method loadSync
   * @overide
   * @public
   *
   * @return {object} - the load store
   */
  loadSync() {

    if (this.store === null) {
      const dir = this._getDirectory();

      const schema = dirScanner(dir);

      this._store = refResolver(schema);
    }

    return this.store;
  }

  /**
   * Load the configuration asynchrone.
   *
   * @method load
   * @overide
   * @public
   *
   * @param {function} callback - called if the store is loaded
   *       function signature is callback(error, store) if success the error is null
   */
  load(callback) {
    if (!this.store) {
      this.loadSync();
    }

    callback(null, this.store);
  }

  _getDirectory() {
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
