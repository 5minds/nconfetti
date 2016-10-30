'use strict';

const fs = require('fs');
const path = require('path');

function readFile(filename) {
  const content = fs.readFileSync(filename);

  try {
    const items = JSON.parse(content);
    return items;
  } catch (error) {
    return {};
  }
}

function readDir(dirname) {

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
        const subStore = readDir(pathName);

        store[entry] = subStore;
      } else {
        const subStore = readFile(pathName);

        // TODO: should it be json every time?
        const namespace = path.basename(pathName, '.json');

        store[namespace] = subStore;
      }
    }
  }

  return store;
}

/**
 * Entrypoint to start a scann for the given directory
 * to load all '*.conf' file and parse them as json files.
 *
 * @method dirScanner
 * @public
 *
 * @param {string} startDir - the directory to start the scann.
 * @return {object} - Returns the store for all configurations.
 */
function dirScanner(startDir) {

  const store = readDir(startDir);

  return store;
}


module.exports = dirScanner;
