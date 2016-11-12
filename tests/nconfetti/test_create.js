'use strict';

const path = require('path');

const should = require('should');

const Nconfetti = require('./../../index.js');

describe('Nconfetti#create', () => {

  it('should handle the env and path as directory', (done) => {
    const nconfetti = new Nconfetti({path: path.join(__dirname, '..', 'configs'), env: 'development'});

    should(nconfetti.env).be.equal('development');
    should(nconfetti.path).be.equal(path.join(__dirname, '..', 'configs'));

    done();
  });

  it('should handle path as directory without env', (done) => {
    const nconfetti = new Nconfetti({path: path.join(__dirname, '..', 'configs')});

    should(nconfetti.env).be.equal(null);
    should(nconfetti.path).be.equal(path.join(__dirname, '..', 'configs'));

    done();
  });

});
