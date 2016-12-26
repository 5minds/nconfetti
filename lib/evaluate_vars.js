'use strict';

const handlebars = require('handlebars');

function evaluateVars(content, vars) {

  const template = handlebars.compile(content);

  return template(vars);
}

module.exports = evaluateVars;
