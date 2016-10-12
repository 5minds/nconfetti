'use strict';

const fs = require('fs');
const path = require('path');

class DirScanner {

  scann(startDir) {

    const store = this._readDir(startDir);

    return store;
  }

  _readDir(dirname) {

    const store = {};

    const entries = fs.readdirSync(dirname);

    for (let index = 0; index < entries.length; index++) {
      const entry = entries[index];

      if (entry === '.' || entry === '..') {
        // skip
      } else {

        const pathName = path.join(dirname, entry);

        const lstatSync = fs.lstatSync(pathName);

        if (lstatSync.isDirectory()) {
          const subStore = this._readDir(pathName);

          store[entry] = subStore;
        } else {
          const subStore = this._readFile(pathName);

          // TODO: should it be json every time?
          const namespace = path.basename(pathName, '.json');

          store[namespace] = subStore;
        }
      }
    }

    return store;
  }

  _readFile(filename) {
    const content = fs.readFileSync(filename);

    try {
      const items = JSON.parse(content);
      return items;
    } catch (error) {
      return {};
    }
  }

}

module.exports = DirScanner;
