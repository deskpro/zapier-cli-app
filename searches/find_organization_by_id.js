const replaceCustomFields = require('../functions/replace_custom_fields');

// find a particular find_organization_by_id by name
const searchFindorganizationbyid = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/organizations`,
    params: {
      ids: bundle.inputData.ids
    }
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
