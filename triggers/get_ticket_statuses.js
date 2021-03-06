// triggers on get_ticket_statuses with a certain tag
const triggerGetticketstatuses = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/ticket_statuses`
  });
  return responsePromise
    .then(response => {
      const statuses = [
        {
          id: 'awaiting_agent',
          label: 'Awaiting agent'
        },
        {
          id: 'awaiting_user',
          label: 'Awaiting user'
        },
        {
          id: 'pending',
          label: 'Pending'
        },
        {
          id: 'resolved',
          label: 'Resolved'
        }
      ];
      const content = z.JSON.parse(response.content);
      content.data.forEach(function( status ) {
        if (status.status_type !== 'hidden') {
          statuses.push({
            id:status.status_code,
            label:status.title
          });
        }
      });
      return statuses;
    });
};

module.exports = {
  key: 'get_ticket_statuses',
  noun: 'Status',

  display: {
    label: 'Get Ticket Statuses',
    description: 'Get ticket statuses from dynamic dropdowns.',
    hidden: true
  },

  operation: {
    inputFields: [

    ],
    outputFields: [
      {
        key: 'data',
        type: 'string',
        label: 'Status'
      }
    ],

    sample: {
      id: 'awaiting_agent',
      label: 'awaiting_agent'
    },

    perform: triggerGetticketstatuses
  }
};
