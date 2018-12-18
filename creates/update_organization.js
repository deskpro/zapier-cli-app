const replaceCustomFields = require('../functions/replace_custom_fields');
const formatLabels = require('../functions/format_labels');

// create a particular update_organization by name
const createUpdateorganization = (z, bundle) => {
  const responsePromise = z.request({
    method: 'PUT',
    url: `https://${bundle.authData.platform_url}/api/v2/organizations/${bundle.inputData.id}`,
    body: JSON.stringify(formatLabels(bundle.inputData))
  });
  const getOrganizationCustomFields = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/organization_custom_fields`
  });
  return Promise.all([responsePromise, getOrganizationCustomFields])
    .then(responses => {
      const customFields = z.JSON.parse(responses[1].content).data;
      if (responses[0].status === 400) {
        parseError(responses[0], customFields);
      }
      const organizations = z.JSON.parse(responses[0].content).data;
      if (organizations.length) {
        return organizations.map((organization) => {
          return replaceCustomFields(organization, customFields);
        });
      }
      return [];
    });
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
        type: 'integer',
        required: true
      },
      {
        key: 'name',
        label: 'Name',
        type: 'string',
        required: false
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
        helpText: 'Replace the existing list of labels. Comma separated list of labels',
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
