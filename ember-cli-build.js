'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('node_modules/sinon/pkg/sinon.js', {
    type: 'test',
    using: [{ transformation: 'amd', as: 'sinon' }]
  });

  return app.toTree();
};
