'use strict';

const path = require('path');

const should = require('should');

const Nconfdir = require('./../index.js');

describe('Nconfdir#getDirectory', () => {

  it('should getDirectory include dir and expanded env', (done) => {
    const nconfdir = new Nconfdir({dir: path.join(__dirname, 'configs', 'env'), env: 'development'});

    should(nconfdir.getDirectory()).be.equal(path.join(__dirname, 'configs', 'env', 'development'));

    done();
  });

  it('should getDirectory include dir without env', (done) => {
    const nconfdir = new Nconfdir({dir: path.join(__dirname, 'configs', 'env')});

    should(nconfdir.getDirectory()).be.equal(path.join(__dirname, 'configs', 'env'));

    done();
  });

});
