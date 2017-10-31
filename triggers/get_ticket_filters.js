// Trigger stub created by 'zapier convert'. This is just a stub - you will need to edit!

// triggers on get_ticket_filters with a certain tag
const triggerGetticketfilters = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/ticket_filters`,
    params: {}
  });
  return responsePromise
    .then(response => z.JSON.parse(response.content).data);
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
        key: 'date_created',
        type: 'string'
      },
      {
        key: 'date_updated',
        type: 'string'
      },
      {
        key: 'display_order',
        type: 'string'
      },
      {
        key: 'filter_preferences',
        type: 'string'
      },
      {
        key: 'filter_views',
        type: 'string'
      },
      {
        key: 'id',
        type: 'string',
        label: 'Id'
      },
      {
        key: 'ticket_filter_set',
        type: 'string'
      },
      {
        key: 'title',
        type: 'string',
        label: 'Title'
      }
    ],

    perform: triggerGetticketfilters
  }
};
