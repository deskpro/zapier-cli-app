// Trigger stub created by 'zapier convert'. This is just a stub - you will need to edit!

// triggers on create_organization with a certain tag
const triggerNeworganization = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/organizations`,
    params: {
      EXAMPLE: bundle.inputData.EXAMPLE
    }
  });
  return responsePromise
    .then(response => JSON.parse(response.content));
};

module.exports = {
  key: 'new_organization',
  noun: 'Organization',

  display: {
    label: 'New Organization',
    description: 'Triggers when a new organization is created.'
  },

  operation: {
    inputFields: [

    ],
    outputFields: [
      {
        key: 'chats_count',
        type: 'string'
      },
      {
        key: 'contact_data',
        type: 'string'
      },
      {
        key: 'date_created',
        type: 'string'
      },
      {
        key: 'email_domains',
        type: 'string'
      },
      {
        key: 'id',
        type: 'string',
        label: 'Id'
      },
      {
        key: 'importance',
        type: 'string'
      },
      {
        key: 'labels',
        type: 'string'
      },
      {
        key: 'members',
        type: 'string'
      },
      {
        key: 'name',
        type: 'string',
        label: 'Name'
      },
      {
        key: 'parent',
        type: 'string'
      },
      {
        key: 'summary',
        type: 'string',
        label: 'Summary'
      },
      {
        key: 'tickets_count',
        type: 'string'
      },
      {
        key: 'user_groups',
        type: 'string'
      }
    ],

    perform: triggerNeworganization
  }
};
