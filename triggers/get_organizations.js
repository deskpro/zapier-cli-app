const replaceCustomFields = require('../functions/replace_custom_fields');

// triggers on get_organizations with a certain tag
const triggerGetorganizations = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/organizations`
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
  key: 'get_organizations',
  noun: 'Organization',

  display: {
    label: 'Get Organization',
    description: 'Get organizations for dynamic dropdowns.',
    hidden: true
  },

  operation: {
    inputFields: [
    ],
    outputFields: [
      {
        key: 'data',
        type: 'string'
      },
      {
        key: 'data[]chats_count',
        type: 'string',
        label: 'Chats count'
      },
      {
        key: 'data[]contact_data',
        type: 'string'
      },
      {
        key: 'data[]date_created',
        type: 'string'
      },
      {
        key: 'data[]email_domains',
        type: 'string'
      },
      {
        key: 'data[]id',
        type: 'string',
        label: 'Id'
      },
      {
        key: 'data[]importance',
        type: 'string'
      },
      {
        key: 'data[]labels',
        type: 'string'
      },
      {
        key: 'data[]members',
        type: 'string',
        label: 'Members Ids'
      },
      {
        key: 'data[]name',
        type: 'string',
        label: 'Name'
      },
      {
        key: 'data[]parent',
        type: 'string'
      },
      {
        key: 'data[]summary',
        type: 'string',
        label: 'Summary'
      },
      {
        key: 'data[]tickets_count',
        type: 'string',
        label: 'Tickets count'
      },
      {
        key: 'data[]user_groups',
        type: 'string'
      },
      {
        key: 'meta__pagination__count',
        type: 'string'
      },
      {
        key: 'meta__pagination__current_page',
        type: 'string'
      },
      {
        key: 'meta__pagination__per_page',
        type: 'string'
      },
      {
        key: 'meta__pagination__total',
        type: 'string'
      },
      {
        key: 'meta__pagination__total_pages',
        type: 'string'
      }
    ],

    perform: triggerGetorganizations
  }
};
