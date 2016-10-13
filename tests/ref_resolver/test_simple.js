'use strict';

const should = require('should');

const refResolver = require('./../../lib/ref_resolver');

const schema = require('./schema.json');

describe('RefResolver', () => {

  it('should resolve refs in schema synchronous', () => {
    const resolvedSchema = refResolver(schema);

    should(resolvedSchema.string)
      .eql('string');
  });

});
