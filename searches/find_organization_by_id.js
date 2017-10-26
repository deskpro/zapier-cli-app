// Search stub created by 'zapier convert'. This is just a stub - you will need to edit!

// find a particular find_organization_by_id by name
const searchFindorganizationbyid = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/organizations?ids={{ids}}`,
    params: {
      EXAMPLE: bundle.inputData.EXAMPLE
    }
  });
  return responsePromise
    .then(response => JSON.parse(response.content));
};

module.exports = {
  key: 'find_organization_by_id',
  noun: 'Organization',

  display: {
    label: 'Find Organization by Id',
    description: 'Find an existing organization by its id.',
    hidden: true
  },

  operation: {
    inputFields: [
      {
        key: 'ids',
        label: 'Id',
        helpText: '(help text must be at least 10 characters)',
        type: 'string',
        required: true
      }
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
        type: 'string'
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
        type: 'string'
      },
      {
        key: 'parent',
        type: 'string'
      },
      {
        key: 'summary',
        type: 'string'
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

    perform: searchFindorganizationbyid
  }
};
