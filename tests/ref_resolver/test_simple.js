'use strict';

const should = require('should');

const refResolver = require('./../../lib/ref_resolver');

const schema = require('./schema.json');
const resolvedSchema = require('./resolvedSchema.json');

describe('RefResolver', () => {

  it('should resolve refs in schema synchronous', () => {
    const resolved = refResolver(schema);

    should(resolved.string)
      .eql('string');
  });

  it('should work with already resolved schema', () => {
    const resolved = refResolver(resolvedSchema);

    should(resolved)
      .deepEqual(resolvedSchema);
  });

});
