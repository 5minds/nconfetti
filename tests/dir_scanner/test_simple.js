'use strict';

const path = require('path');

const should = require('should');

const DirScanner = require('./../../lib/dir_scanner');

describe('DirScanner', () => {

  it('should create a simple store', (done) => {
    const dirname = path.join(__dirname, '..', 'configs', 'without_env');

    const dirScanner = new DirScanner();

    const store = dirScanner.scann(dirname);

    should(store).be.deepEqual({entry: 'a sample entry'});

    done();
  });

});
