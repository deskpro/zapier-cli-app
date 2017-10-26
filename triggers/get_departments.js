// Trigger stub created by 'zapier convert'. This is just a stub - you will need to edit!

// triggers on get_departments with a certain tag
const triggerGetdepartments = (z, bundle) => {
  const responsePromise = z.request({
    url: 'https://{{platform_url}}/api/v2/ticket_departments',
    params: {
      EXAMPLE: bundle.inputData.EXAMPLE
    }
  });
  return responsePromise
    .then(response => JSON.parse(response.content));
};

module.exports = {
  key: 'get_departments',
  noun: 'Department',

  display: {
    label: 'Get Departments',
    description: 'Triggers when a user want to get departments for dynamic dropdowns.',
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
        key: 'data[]agents',
        type: 'string'
      },
      {
        key: 'data[]avatar',
        type: 'string'
      },
      {
        key: 'data[]brands',
        type: 'string',
        label: 'Brands'
      },
      {
        key: 'data[]display_order',
        type: 'string'
      },
      {
        key: 'data[]id',
        type: 'string',
        label: 'Id'
      },
      {
        key: 'data[]is_chat_enabled',
        type: 'string'
      },
      {
        key: 'data[]is_tickets_enabled',
        type: 'string'
      },
      {
        key: 'data[]parent',
        type: 'string',
        label: 'Parent'
      },
      {
        key: 'data[]title',
        type: 'string',
        label: 'Title'
      },
      {
        key: 'data[]user_title',
        type: 'string',
        label: 'User Title'
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

    perform: triggerGetdepartments
  }
};
