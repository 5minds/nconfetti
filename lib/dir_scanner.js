'use strict';

const fs = require('fs');
const path = require('path');

const evaluateVars = require('./evaluate_vars');

function readFile(filename, vars) {
  const content = fs.readFileSync(filename)
    .toString();

  const newContent = evaluateVars(content, vars);

  try {
    const items = JSON.parse(newContent);
    return items;
  } catch (error) {
    throw new Error(`couldn't parse JSON-file at '${filename}': ${error.message}`);
  }
}

function readDir(dirname, vars) {

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
        const subStore = readDir(pathName, vars);

        store[entry] = subStore;
      } else {
        const subStore = readFile(pathName, vars);

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
 * @param {object} vars - a key value list of vars that need to be
 *  evaluated within the config content.
 * @return {object} - Returns the store for all configurations.
 */
function dirScanner(startDir, vars) {

  const store = readDir(startDir, vars);

  return store;
}


module.exports = dirScanner;
