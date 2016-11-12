'use strict';

const path = require('path');

const should = require('should');

const Nconfetti = require('./../../index.js');

describe('Nconfetti#loadSync', () => {

  it('should loadSync all config files of given directory', (done) => {
    const nconfetti = new Nconfetti({path: path.join(__dirname, '..', 'configs', 'env'), env: 'development'});

    const config = nconfetti.loadSync();

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
