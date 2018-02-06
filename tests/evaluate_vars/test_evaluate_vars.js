'use strict';

const fs = require('fs');
const path = require('path');

const should = require('should');

const evaluateVars = require('./../../lib/evaluate_vars');

describe('evaluateVars()', () => {

  it('should evaluate simple vars', (done) => {
    const filename = path.join(__dirname, '..', 'configs', 'with_vars', 'simple_vars.json');

    const content = fs.readFileSync(filename)
      .toString();

    const evaluatedContent = evaluateVars(content, {hello: 'hello world'});

    const parsedContent = JSON.parse(evaluatedContent);

    const expectedContent = {
      key: 'hello world',
    };

    should(parsedContent).be.deepEqual(expectedContent);

    done();
  });

});
