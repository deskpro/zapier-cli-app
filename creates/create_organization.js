// "Create" stub created by 'zapier convert'. This is just a stub - you will need to edit!

// create a particular create_organization by name
const createCreateorganization = (z, bundle) => {
  const responsePromise = z.request({
    method: 'POST',
    url: `https://${bundle.authData.platform_url}/api/v2/organizations`,
    body: JSON.stringify(bundle.inputData)
  });
  const getOrganizationCustomFields = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/organization_custom_fields`
  });
  return Promise.all([responsePromise, getOrganizationCustomFields])
    .then(responses => {
      const organizations = z.JSON.parse(responses[0].content).data;
      const customFields = z.JSON.parse(responses[1].content).data;
      if (organizations.length) {
        return organizations.map((organization) => {
          return replaceCustomFields(organization, customFields);
        });
      }
      return [];
    });
};

module.exports = {
  key: 'create_organization',
  noun: 'Organization',

  display: {
    label: 'Create Organization',
    description: 'Create a new organization.'
  },

  operation: {
    inputFields: [
      {
        key: 'name',
        label: 'Name',
        type: 'string',
        required: true
      },
      {
        key: 'summary',
        label: 'Summary',
        type: 'string',
        required: false
      },
      {
        key: 'labels',
        label: 'Labels',
        type: 'string',
        required: false
      }
    ],
    outputFields: [
      {
        key: 'data__chats_count',
        type: 'string'
      },
      {
        key: 'data__contact_data',
        type: 'string'
      },
      {
        key: 'data__date_created',
        type: 'string'
      },
      {
        key: 'data__email_domains',
        type: 'string'
      },
      {
        key: 'data__id',
        type: 'string',
        label: 'Id'
      },
      {
        key: 'data__importance',
        type: 'string'
      },
      {
        key: 'data__labels',
        type: 'string'
      },
      {
        key: 'data__members',
        type: 'string'
      },
      {
        key: 'data__name',
        type: 'string',
        label: 'Name'
      },
      {
        key: 'data__parent',
        type: 'string'
      },
      {
        key: 'data__summary',
        type: 'string',
        label: 'Summary'
      },
      {
        key: 'data__tickets_count',
        type: 'string'
      },
      {
        key: 'data__user_groups',
        type: 'string'
      }
    ],

    perform: createCreateorganization
  }
};
