'use strict';

const path = require('path');

const should = require('should');

const Nconfdir = require('./../../index.js');

/* only to check the _getDirectory function */
/* eslint no-underscore-dangle: "allow" */

describe('Nconfdir#getDirectory', () => {

  it('should getDirectory include dir and expanded env', (done) => {
    const nconfdir = new Nconfdir({dir: path.join(__dirname, '..', 'configs', 'env'), env: 'development'});

    should(nconfdir.getDirectory()).be.equal(path.join(__dirname, '..', 'configs', 'env', 'development'));

    done();
  });

  it('should raise an Error for getDirectory if dir didn\' exist', (done) => {
    const nconfdir = new Nconfdir({dir: path.join(__dirname, '..', 'configs', 'without_env'), env: 'development'});

    (() => {
      nconfdir._getDirectory();
    }).should.throw(Error);

    done();
  });

  it('should getDirectory include dir without env', (done) => {
    const nconfdir = new Nconfdir({dir: path.join(__dirname, '..', 'configs', 'env')});

    should(nconfdir.getDirectory()).be.equal(path.join(__dirname, '..', 'configs', 'env'));

    done();
  });

  it('should raise an Error for getDirectory if dir and env didn\' exist', (done) => {
    const nconfdir = new Nconfdir({dir: path.join(__dirname, '..', 'configs', 'did_exist')});

    (() => {
      nconfdir.getDirectory();
    }).should.throw(Error);

    done();
  });

});
