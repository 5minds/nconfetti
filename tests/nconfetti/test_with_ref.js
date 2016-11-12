'use strict';

const path = require('path');

const should = require('should');

const Nconfetti = require('./../../index.js');

describe('Nconfetti#loadSync with refs', () => {

  it('should loadSync all config files of given directory', (done) => {
    const nconfetti = new Nconfetti({path: path.join(__dirname, '..', 'configs', 'complex_refs')});

    const config = nconfetti.loadSync();

    should(config.sub.config.entry_with_ref)
      .equal(config.root.entry);

    done();
  });

});
