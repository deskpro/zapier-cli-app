// triggers on get_ticket_categories with a certain tag
const triggerGetticketcategories = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/ticket_categories`
  });
  return responsePromise
    .then(response => {
      const categories = [];
      const content = z.JSON.parse(response.content);
      content.data
        .sort((a, b) => {
          return a.display_order > b.display_order
        })
        .forEach(function( category ) {
        categories.push({id:category.id, label:category.title});
      });
      return categories;
    });
};

module.exports = {
  key: 'get_ticket_categories',
  noun: 'Category',

  list: {
    display: {
      label: 'Get Ticket Categories',
      description: 'Get ticket categories from dynamic dropdowns.',
      hidden: true
    },

    operation: {
      inputFields: [

      ],
      outputFields: [
        {
          key: 'data',
          type: 'string',
          label: 'Category'
        }
      ],

      sample: {
        id: "1",
        label: "High"
      },

      perform: triggerGetticketcategories
    }
  }
};
