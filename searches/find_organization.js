const replaceCustomFields = require('../functions/replace_custom_fields');

// find a particular find_organization by name
const searchFindorganization = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/organizations`,
    params: {
      name: bundle.inputData.name
    }
  });
  const getOrganizationCustomFields = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/organization_custom_fields`
  });
  return Promise.all([responsePromise, getOrganizationCustomFields])
    .then(responses => {
      const organizations = z.JSON.parse(responses[0].content).data;
      const customFields = z.JSON.parse(responses[1].content).data;
      if (organizations.length) {
        return organizations.map((organization) => {
          return replaceCustomFields(organization, customFields);
        });
      }
      return [];
    });
};

module.exports = {
  key: 'find_organization',
  noun: 'Organization',

  display: {
    label: 'Find Organization',
    description: 'Find an existing organization.',
    important: true
  },

  operation: {
    inputFields: [
      {
        key: 'name',
        label: 'Name',
        type: 'string',
        required: true
      }
    ],
    outputFields: [
      {
        key: 'chats_count',
        type: 'string'
      },
      {
        key: 'contact_data',
        type: 'string'
      },
      {
        key: 'date_created',
        type: 'string'
      },
      {
        key: 'email_domains',
        type: 'string'
      },
      {
        key: 'id',
        type: 'string'
      },
      {
        key: 'importance',
        type: 'string'
      },
      {
        key: 'labels',
        type: 'string'
      },
      {
        key: 'members',
        type: 'string'
      },
      {
        key: 'name',
        type: 'string'
      },
      {
        key: 'parent',
        type: 'string'
      },
      {
        key: 'summary',
        type: 'string'
      },
      {
        key: 'tickets_count',
        type: 'string'
      },
      {
        key: 'user_groups',
        type: 'string'
      }
    ],
    sample: {
      "id": 1,
      "name": "Barton-Wuckert",
      "summary": "Alice could only hear whispers now and then; such as, 'Sure, I don't believe you do either!' And the Gryphon interrupted in a large caterpillar, that was sitting on a little timidly, 'why you are very dull!' 'You ought to have wondered at this, but at last it sat for a long time together.' 'Which is just the case with my wife; And the moral of that dark hall, and close to her: its face to see a little scream of laughter. 'Oh, hush!' the Rabbit hastily interrupted. 'There's a great hurry to.",
      "importance": 1,
      "fields": {},
      "user_groups": [],
      "labels": [
        "beer koelpin and prohaska",
        "eichmann lowe and labadie",
        "walter llc"
      ],
      "contact_data": [],
      "email_domains": [],
      "date_created": "2020-12-08T21:38:05+0000",
      "parent": null,
      "chats_count": 0,
      "tickets_count": 3,
      "phone_numbers": []
    },

    perform: searchFindorganization
  }
};
