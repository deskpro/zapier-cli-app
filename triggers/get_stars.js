// Trigger stub created by 'zapier convert'. This is just a stub - you will need to edit!

// triggers on get_stars with a certain tag
const triggerGetstars = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/ticket_stars`
  });
  return responsePromise
    .then(response => z.JSON.parse(response.content).data);
};

module.exports = {
  key: 'get_stars',
  noun: 'Star',

  display: {
    label: 'Get Stars',
    description: 'Get Stars for dynamic dropdown.',
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
        key: 'data[]color',
        type: 'string',
        label: 'Color'
      },
      {
        key: 'data[]hex',
        type: 'string',
        label: 'Hexadecimal color code'
      },
      {
        key: 'data[]id',
        type: 'string',
        label: 'Id'
      },
      {
        key: 'data[]name',
        type: 'string',
        label: 'Name'
      }
    ],

    sample: {
      "id": 1,
      "name": "Blue",
      "color": "blue",
      "hex": "#0000FF"
    },

    perform: triggerGetstars
  }
};
