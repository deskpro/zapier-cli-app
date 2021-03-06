// Trigger stub created by 'zapier convert'. This is just a stub - you will need to edit!

// triggers on get_departments with a certain tag
const triggerGetdepartments = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/ticket_departments`
  });
  return responsePromise
    .then(response => z.JSON.parse(response.content).data);
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

    sample: {
      "id": 1,
      "parent": null,
      "children": [],
      "title": "Support",
      "user_title": "Support",
      "is_tickets_enabled": true,
      "is_chat_enabled": false,
      "display_order": 0,
      "avatar": null,
      "brands": [
        1
      ]
    },

    perform: triggerGetdepartments
  }
};
