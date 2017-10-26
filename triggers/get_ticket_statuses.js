// Trigger stub created by 'zapier convert'. This is just a stub - you will need to edit!

// triggers on get_ticket_statuses with a certain tag
const triggerGetticketstatuses = (z, bundle) => {
  const responsePromise = z.request({
    url: 'https://{{platform_url}}/api/v2/ticket_statuses',
    params: {
      EXAMPLE: bundle.inputData.EXAMPLE
    }
  });
  return responsePromise
    .then(response => JSON.parse(response.content));
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
