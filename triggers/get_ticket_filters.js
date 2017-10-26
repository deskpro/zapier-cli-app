// Trigger stub created by 'zapier convert'. This is just a stub - you will need to edit!

// triggers on get_ticket_filters with a certain tag
const triggerGetticketfilters = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/new/ticket_filters`,
    params: {
      EXAMPLE: bundle.inputData.EXAMPLE
    }
  });
  return responsePromise
    .then(response => JSON.parse(response.content));
};

module.exports = {
  key: 'get_ticket_filters',
  noun: 'Filter',

  display: {
    label: 'Get Ticket Filters',
    description: 'Get ticket filter for dynamic dropdown.',
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
        key: 'data[]date_created',
        type: 'string'
      },
      {
        key: 'data[]date_updated',
        type: 'string'
      },
      {
        key: 'data[]display_order',
        type: 'string'
      },
      {
        key: 'data[]filter_preferences',
        type: 'string'
      },
      {
        key: 'data[]filter_views',
        type: 'string'
      },
      {
        key: 'data[]id',
        type: 'string',
        label: 'Id'
      },
      {
        key: 'data[]term__op',
        type: 'string'
      },
      {
        key: 'data[]term__options',
        type: 'string'
      },
      {
        key: 'data[]term__options__status',
        type: 'string'
      },
      {
        key: 'data[]term__terms',
        type: 'string'
      },
      {
        key: 'data[]term__terms[]op',
        type: 'string'
      },
      {
        key: 'data[]term__terms[]options__agent_ids',
        type: 'string'
      },
      {
        key: 'data[]term__terms[]options__agent_team_ids',
        type: 'string'
      },
      {
        key: 'data[]term__terms[]options__person_ids',
        type: 'string'
      },
      {
        key: 'data[]term__terms[]options__status',
        type: 'string'
      },
      {
        key: 'data[]ticket_filter_set',
        type: 'string'
      },
      {
        key: 'data[]title',
        type: 'string',
        label: 'Title'
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

    perform: triggerGetticketfilters
  }
};
