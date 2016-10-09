'use strict';

const path = require('path');

const should = require('should');

const Nconfdir = require('./../index.js');

describe('Nconfdir#construct', () => {

  it('should handle the env and dir', (done) => {
    const nconfdir = new Nconfdir({dir: path.join(__dirname, 'configs'), env: 'development'});

    should(nconfdir.env).be.equal('development');
    should(nconfdir.dir).be.equal(path.join(__dirname, 'configs'));

    done();
  });

  it('should handle dir without env', (done) => {
    const nconfdir = new Nconfdir({dir: path.join(__dirname, 'configs')});

    should(nconfdir.env).be.equal(null);
    should(nconfdir.dir).be.equal(path.join(__dirname, 'configs'));

    done();
  });

});
