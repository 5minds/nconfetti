'use strict';

const deasync = require('deasync');
const parser = require('json-schema-deref');

function resolveAsync(schema, callback) {
  parser(schema, (error, resolvedSchema) => {
    callback(error, resolvedSchema);
  });
}

function refResolver(schema) {

  const resolveSync = deasync(resolveAsync);

  const resolvedSchema = resolveSync(schema);

  return resolvedSchema;
}

module.exports = refResolver;
