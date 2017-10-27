'use strict';

require('should');

const zapier = require('zapier-platform-core');

const globalBeforeSetup = (done) => {
  zapier.tools.env.inject();

  if (!process.env.PLATFORM_URL || !process.env.API_KEY) {
    throw new Error('Setup your .environment file (or use `export`) according to the README.');
  }

  done();
};

module.exports = {
  globalBeforeSetup,
};