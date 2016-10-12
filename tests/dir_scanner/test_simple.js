'use strict';

const path = require('path');

const should = require('should');

const DirScanner = require('./../../lib/dir_scanner');

describe('DirScanner#scann() -> simpleStore', () => {

  it('should create a simple store', (done) => {
    const dirname = path.join(__dirname, '..', 'configs', 'without_env');

    const dirScanner = new DirScanner();

    const store = dirScanner.scann(dirname);

    const expectedStore = {
      simple_config: {
        entry: 'a sample entry',
      },
    };

    should(store).be.deepEqual(expectedStore);

    done();
  });

});
