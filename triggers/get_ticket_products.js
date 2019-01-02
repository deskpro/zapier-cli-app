// triggers on get_ticket_products with a certain tag
const triggerGetticketproducts = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/ticket_products`
  });
  return responsePromise
    .then(response => {
      const products = [];
      const content = z.JSON.parse(response.content);
      content.data
        .sort((a, b) => {
          return a.display_order > b.display_order
        })
        .forEach(function( product ) {
        products.push({id:product.id, label:product.title});
      });
      return products;
    });
};

module.exports = {
  key: 'get_ticket_products',
  noun: 'Product',

  list: {
    display: {
      label: 'Get Ticket Products',
      description: 'Get ticket products from dynamic dropdowns.',
      hidden: true
    },

    operation: {
      inputFields: [

      ],
      outputFields: [
        {
          key: 'data',
          type: 'string',
          label: 'Product'
        }
      ],

      sample: {
        id: "1",
        label: "High"
      },

      perform: triggerGetticketproducts
    }
  }
};
