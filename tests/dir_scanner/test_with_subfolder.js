'use strict';

const path = require('path');

const should = require('should');

const DirScanner = require('./../../lib/dir_scanner');

describe('DirScanner#scann() -> complexStore', () => {

  it('should create a store with subfolder', (done) => {
    const dirname = path.join(__dirname, '..', 'configs', 'env', 'development');

    const dirScanner = new DirScanner();

    const store = dirScanner.scann(dirname);

    const expectedStore = {
      development_config: {
        development_config: 'A Entry',
      },
      sub_folder: {
        sub_folder_config: {
          sub: 'A sub entry',
        },
      },
    };

    should(store).be.deepEqual(expectedStore);

    done();
  });

});
