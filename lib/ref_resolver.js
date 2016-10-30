'use strict';

const deasync = require('deasync');
const parser = require('json-schema-deref');

function resolveAsync(schema, callback) {
  parser(schema, (error, resolvedSchema) => {
    callback(error, resolvedSchema);
  });
}

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

  const resolveSync = deasync(resolveAsync);

  const resolvedSchema = resolveSync(schema);

  return resolvedSchema;
}

module.exports = refResolver;
