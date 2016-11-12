'use strict';

const path = require('path');

const should = require('should');

const Nconfetti = require('./../../index.js');

/* only to check the _getDirectory function */
/* eslint no-underscore-dangle: "allow" */

describe('Nconfetti#_getDirectory', () => {

  it('should getDirectory include directory and expanded env', (done) => {
    const nconfetti = new Nconfetti({path: path.join(__dirname, '..', 'configs', 'env'), env: 'development'});

    should(nconfetti._getDirectory()).be.equal(path.join(__dirname, '..', 'configs', 'env', 'development'));

    done();
  });

  it('should raise an Error for getDirectory if dir didn\' exist', (done) => {
    const nconfetti = new Nconfetti({path: path.join(__dirname, '..', 'configs', 'without_env'), env: 'development'});

    (() => {
      nconfetti._getDirectory();
    }).should.throw(Error);

    done();
  });

  it('should getDirectory include path as directory without env', (done) => {
    const nconfetti = new Nconfetti({path: path.join(__dirname, '..', 'configs', 'env')});

    should(nconfetti._getDirectory()).be.equal(path.join(__dirname, '..', 'configs', 'env'));

    done();
  });

  it('should raise an Error for getDirectory if directory and env didn\' exist', (done) => {
    const nconfetti = new Nconfetti({path: path.join(__dirname, '..', 'configs', 'did_exist')});

    (() => {
      nconfetti._getDirectory();
    }).should.throw(Error);

    done();
  });

});
