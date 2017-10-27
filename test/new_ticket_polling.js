require('should');

const zapier = require('zapier-platform-core');

const testUtils = require('./test-utils');
const App = require('../index');
const appTester = zapier.createAppTester(App);

describe('Triggers', () => {
  before(testUtils.globalBeforeSetup);

  it('should test auth', (done) => {
    const bundle = {
      authData: {
        platform_url: process.env.PLATFORM_URL,
        apiKey: process.env.API_KEY
      },
    };


    appTester(App.triggers.new_ticket_polling.operation.perform, bundle)
      .then((result) => {
        // result.should.eql([]);
        done();
      })
      .catch(done);
  });
});