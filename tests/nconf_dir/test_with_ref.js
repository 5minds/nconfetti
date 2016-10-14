'use strict';

const path = require('path');

const should = require('should');

const Nconfdir = require('./../../index.js');

describe('Nconfdir#loadSync', () => {

  it('should loadSync all config files of given directory', (done) => {
    const nconfdir = new Nconfdir({dir: path.join(__dirname, '..', 'configs', 'complex_refs')});

    const config = nconfdir.loadSync();

    should(config.sub.config.entry_with_ref)
      .equal(config.root.entry);

    done();
  });

});
