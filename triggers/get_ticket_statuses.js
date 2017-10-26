// Trigger stub created by 'zapier convert'. This is just a stub - you will need to edit!

// triggers on get_ticket_statuses with a certain tag
const triggerGetticketstatuses = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/ticket_statuses`,
    params: {}
  });
  return responsePromise
    .then(response => {
      const statuses = [];
      const content = z.JSON.parse(response.content);
      content.date.forEach(function( status ) {
        if (!status.match(/^hidden/)) {
          statuses.push({id:status, label:status});
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

    perform: triggerGetticketstatuses
  }
};
