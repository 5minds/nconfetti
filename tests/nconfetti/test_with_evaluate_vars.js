'use strict';

const path = require('path');

const should = require('should');

const Nconfetti = require('./../../index.js');

describe('Nconfetti#loadSync', () => {

  it('should loadSync all config files of given directory', (done) => {
    const configPath = path.join(__dirname, '..', 'configs', 'with_vars');
    const configVars = {hello: 'hello world'};

    const nconfetti = new Nconfetti({path: configPath, vars: configVars});

    const config = nconfetti.loadSync();

    const expectedConfig = {
      simple_vars: {
        key: 'hello world',
      },
    };

    should(config)
      .deepEqual(expectedConfig);

    done();
  });

});
