// Trigger stub created by 'zapier convert'. This is just a stub - you will need to edit!

// triggers on get_organizations with a certain tag
const triggerGetorganizations = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/organizations`
  });
  return responsePromise
    .then(response => z.JSON.parse(response.content).data);
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
