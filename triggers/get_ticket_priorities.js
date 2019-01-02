// triggers on get_ticket_priorities with a certain tag
const triggerGetticketpriorities = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/ticket_priorities`
  });
  return responsePromise
    .then(response => {
      const priorities = [];
      const content = z.JSON.parse(response.content);
      content.data
        .sort((a, b) => {
          return a.priority > b.priority
        })
        .forEach(function( priority ) {
        priorities.push({id:priority.id, label:priority.title});
      });
      return priorities;
    });
};

module.exports = {
  key: 'get_ticket_priorities',
  noun: 'Priority',

  list: {
    display: {
      label: 'Get Ticket Priorities',
      description: 'Get ticket priorities from dynamic dropdowns.',
      hidden: true
    },

    operation: {
      inputFields: [

      ],
      outputFields: [
        {
          key: 'data',
          type: 'string',
          label: 'Priority'
        }
      ],

      sample: {
        id: "1",
        label: "High"
      },

      perform: triggerGetticketpriorities
    }
  }
};
