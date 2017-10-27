const TesttriggerTrigger = require('./triggers/test_trigger');

module.exports = {
  type: 'custom',
  // Define any auth fields your app requires here. The user will be prompted to enter this info when
  // they connect their account.
  fields: [
    {
      key: 'platform_url',
      label: 'Platform',
      required: true,
      type: 'string',
      helpText: 'This is the full domain of your DeskPRO platform. Please include .deskpro.com if you\'re hosted on the cloud.',
      placeholder: 'yoursupport.deskpro.com',
      inputFormat: 'https://{{input}}/'
    },
    {
      key: 'apiKey',
      label: 'API Key',
      required: true,
      type: 'string',
      helpText: 'You can create a new API key in the Apps / Api Key section of the admin of your Deskpro platform. See [here](https://support.deskpro.com/en/guides/admin-guide/integration/using-the-deskpro-api-2#managing-api-keys) for help.',
      placeholder: '1:ABCDEFGHIJKLMNOP1234567890',
    }
  ],
  connectionLabel: '{{bundle.authData.platform_url}}',
  // The test method allows Zapier to verify that the credentials a user provides are valid. We'll execute this
  // method whenver a user connects their account for the first time.
  test: TesttriggerTrigger.operation.perform
};