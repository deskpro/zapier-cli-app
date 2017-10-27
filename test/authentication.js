require('should');

const zapier = require('zapier-platform-core');

const testUtils = require('./test-utils');
const App = require('../index');
const appTester = zapier.createAppTester(App);

describe('Authentication', () => {
  before(testUtils.globalBeforeSetup);

  it('should test auth', (done) => {
    const bundle = {
      authData: {
        platform_url: process.env.PLATFORM_URL,
        apiKey: process.env.API_KEY
      },
    };


    appTester(App.authentication.test, bundle)
      .then((result) => {
        result.should.eql([]);
        done();
      })
      .catch(done);
  });

  it('should fail on wrong url', (done) => {
    const bundle = {
      authData: {
        platform_url: 'blablabla.deskpro.com',
        apiKey: '123456abcd'
      },
    };

    appTester(App.authentication.test, bundle)
      .then((result) => {
        result.should.have.property('errors');
        done();
      })
      .catch(done);
  });
});