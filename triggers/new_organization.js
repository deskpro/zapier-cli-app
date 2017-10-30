const replaceCustomFields = require('../functions/replace_custom_fields');

// triggers on create_organization with a certain tag
const triggerNeworganization = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/organizations`,
    params: {
      order_by: 'id',
      order_dir: 'desc',
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
