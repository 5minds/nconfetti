'use strict';

const parser = require('json-schema-deref-sync');

/**
 * Make the json schema deref parse work sync to support
 * the sync api of {nconf}.
 *
 * @method refResolver
 * @public
 *
 * @param {object} schema - the schema to scann for ref and resolve them.
 * @return {object} the schema with resolved entries.
 */
function refResolver(schema) {

  const resolvedSchema = parser(schema);

  return resolvedSchema;
}

module.exports = refResolver;
