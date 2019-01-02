// triggers on get_ticket_workflows with a certain tag
const triggerGetticketworkflows = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/ticket_workflows`
  });
  return responsePromise
    .then(response => {
      const workflows = [];
      const content = z.JSON.parse(response.content);
      content.data
        .sort((a, b) => {
          return a.display_order > b.display_order
        })
        .forEach(function( workflow ) {
        workflows.push({id:workflow.id, label:workflow.title});
      });
      return workflows;
    });
};

module.exports = {
  key: 'get_ticket_workflows',
  noun: 'Workflow',

  list: {
    display: {
      label: 'Get Ticket Workflows',
      description: 'Get ticket workflows from dynamic dropdowns.',
      hidden: true
    },

    operation: {
      inputFields: [

      ],
      outputFields: [
        {
          key: 'data',
          type: 'string',
          label: 'Workflow'
        }
      ],

      sample: {
        id: "1",
        label: "High"
      },

      perform: triggerGetticketworkflows
    }
  }
};
