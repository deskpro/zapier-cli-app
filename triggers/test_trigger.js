// Trigger stub created by 'zapier convert'. This is just a stub - you will need to edit!

// triggers on test_trigger with a certain tag
const triggerTesttrigger = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/apps/zapier/ping`
  });
  return responsePromise
    .then(response => {
      if (response.status !== 200 || (response.status === 200 && response.content !== "[]")) {
        throw new Error('Invalid url.');
      }
      return z.JSON.parse(response.content);
    });
};

module.exports = {
  key: 'test_trigger',
  noun: 'Test',

  display: {
    label: 'Test Trigger',
    description: 'Triggers to test API is working.',
    hidden: true
  },

  operation: {
    inputFields: [

    ],

    perform: triggerTesttrigger
  }
};
