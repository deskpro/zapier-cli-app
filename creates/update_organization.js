// "Create" stub created by 'zapier convert'. This is just a stub - you will need to edit!

// create a particular update_organization by name
const createUpdateorganization = (z, bundle) => {
  const responsePromise = z.request({
    method: 'PUT',
    url: `https://${bundle.authData.platform_url}/api/v2/organizations/{{id}}`,
    params: {
      id: bundle.inputData.id
    },
    data: JSON.stringify(bundle.inputData)
  });
  return responsePromise
    .then(response => JSON.parse(response.content));
};

module.exports = {
  key: 'update_organization',
  noun: 'Organization',

  display: {
    label: 'Update Organization',
    description: 'Update an existing organization.',
    hidden: true
  },

  operation: {
    inputFields: [
      {
        key: 'id',
        label: 'Id',
        helpText: '(help text must be at least 10 characters)',
        type: 'string',
        required: true
      },
      {
        key: 'name',
        label: 'Name',
        helpText: '(help text must be at least 10 characters)',
        type: 'string',
        required: false
      },
      {
        key: 'summary',
        label: 'Summary',
        helpText: '(help text must be at least 10 characters)',
        type: 'string',
        required: false
      },
      {
        key: 'labels',
        label: 'Labels',
        helpText: 'Replace the existing list of labels.',
        type: 'string',
        required: false
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

    perform: createUpdateorganization
  }
};
