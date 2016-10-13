'use strict';

const path = require('path');

const should = require('should');

const Nconfdir = require('./../../index.js');

describe('Nconfdir#loadSync', () => {

  it('should loadSync all config files of given directory', (done) => {
    const nconfdir = new Nconfdir({dir: path.join(__dirname, '..', 'configs', 'env'), env: 'development'});

    const config = nconfdir.loadSync();

    const expectedConfig = {
      development_config: {
        development_config: 'A Entry',
      },
      sub_folder: {
        sub_folder_config: {
          sub: 'A sub entry',
        },
      },
    };

    should(config)
      .deepEqual(expectedConfig);

    done();
  });

});
