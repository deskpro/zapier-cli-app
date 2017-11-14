const parseError = require('../functions/parse_error');
const replaceImgSize = require('../functions/replace_img_size');
const replaceCustomFields = require('../functions/replace_custom_fields');

// triggers on get_persons with a certain tag
const triggerGetpersons = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/people`
  });
  const getPersonCustomFields = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/person_custom_fields`
  });
  return Promise.all([responsePromise, getPersonCustomFields])
    .then(responses => {
      if (responses[0].status === 400) {
        parseError(responses[0]);
      }
      const persons = z.JSON.parse(responses[0].content).data;
      const customFields = z.JSON.parse(responses[1].content).data;
      if (persons.length) {
        return persons.map((person) => {
          if (person.avatar) {
            person.avatar.url_pattern = replaceImgSize(person.avatar.url_pattern);
            person.avatar.default_url_pattern = replaceImgSize(person.avatar.default_url_pattern);
          }
          return replaceCustomFields(person, customFields);
        });
      }
      return [];
    });
};

module.exports = {
  key: 'get_persons',
  noun: 'Person',

  display: {
    label: 'Get Person',
    description: 'Get Person for dynamic dropdowns.',
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
        key: 'data[]agent_data',
        type: 'string'
      },
      {
        key: 'data[]agent_groups',
        type: 'string'
      },
      {
        key: 'data[]avatar__base_gravatar_url',
        type: 'string'
      },
      {
        key: 'data[]avatar__default_url_pattern',
        type: 'string'
      },
      {
        key: 'data[]avatar__url_pattern',
        type: 'string'
      },
      {
        key: 'data[]browser',
        type: 'string'
      },
      {
        key: 'data[]can_admin',
        type: 'string'
      },
      {
        key: 'data[]can_agent',
        type: 'string'
      },
      {
        key: 'data[]can_billing',
        type: 'string'
      },
      {
        key: 'data[]chats_count',
        type: 'string'
      },
      {
        key: 'data[]contact_data',
        type: 'string'
      },
      {
        key: 'data[]creation_system',
        type: 'string'
      },
      {
        key: 'data[]date_created',
        type: 'string',
        label: 'Date Created'
      },
      {
        key: 'data[]date_last_login',
        type: 'string'
      },
      {
        key: 'data[]disable_autoresponses',
        type: 'string'
      },
      {
        key: 'data[]disable_autoresponses_log',
        type: 'string'
      },
      {
        key: 'data[]disable_picture',
        type: 'string'
      },
      {
        key: 'data[]emails',
        type: 'string'
      },
      {
        key: 'data[]first_name',
        type: 'string',
        label: 'First Name'
      },
      {
        key: 'data[]gravatar_url',
        type: 'string'
      },
      {
        key: 'data[]id',
        type: 'string',
        label: 'Id'
      },
      {
        key: 'data[]is_agent',
        type: 'string',
        label: 'Is Agent'
      },
      {
        key: 'data[]is_confirmed',
        type: 'string'
      },
      {
        key: 'data[]is_contact',
        type: 'string'
      },
      {
        key: 'data[]is_deleted',
        type: 'string'
      },
      {
        key: 'data[]is_disabled',
        type: 'string'
      },
      {
        key: 'data[]is_user',
        type: 'string'
      },
      {
        key: 'data[]labels',
        type: 'string'
      },
      {
        key: 'data[]language',
        type: 'string'
      },
      {
        key: 'data[]last_name',
        type: 'string',
        label: 'Last Name'
      },
      {
        key: 'data[]last_seen',
        type: 'string'
      },
      {
        key: 'data[]name',
        type: 'string',
        label: 'Name'
      },
      {
        key: 'data[]online',
        type: 'string'
      },
      {
        key: 'data[]organization',
        type: 'string',
        label: 'Organization Id'
      },
      {
        key: 'data[]organization_manager',
        type: 'string'
      },
      {
        key: 'data[]organization_position',
        type: 'string'
      },
      {
        key: 'data[]override_display_name',
        type: 'string'
      },
      {
        key: 'data[]phone_numbers',
        type: 'string'
      },
      {
        key: 'data[]picture_blob',
        type: 'string'
      },
      {
        key: 'data[]primary_email',
        type: 'string',
        label: 'Primary Email'
      },
      {
        key: 'data[]primary_team',
        type: 'string'
      },
      {
        key: 'data[]summary',
        type: 'string'
      },
      {
        key: 'data[]teams',
        type: 'string'
      },
      {
        key: 'data[]tickets_count',
        type: 'string'
      },
      {
        key: 'data[]timezone',
        type: 'string'
      },
      {
        key: 'data[]title_prefix',
        type: 'string'
      },
      {
        key: 'data[]user_groups',
        type: 'string'
      },
      {
        key: 'data[]was_agent',
        type: 'string'
      }
    ],

    sample: {
      "id": 1,
      "primary_email": "john.doe@deskpro.com",
      "first_name": "John",
      "last_name": "Doe",
      "name": "John Doe",
      "display_name": "John Doe",
      "is_agent": true,
      "avatar": {
        "default_url_pattern": null,
        "url_pattern": null,
        "base_gravatar_url": null
      },
      "online": true,
      "last_seen": "2017-11-14T10:17:12+0000",
      "agent_data": null,
      "picture_blob": null,
      "disable_picture": false,
      "gravatar_url": null,
      "is_contact": false,
      "is_user": true,
      "was_agent": false,
      "can_agent": true,
      "can_admin": true,
      "can_billing": true,
      "disable_autoresponses": false,
      "disable_autoresponses_log": "",
      "is_confirmed": true,
      "is_deleted": false,
      "is_disabled": false,
      "creation_system": "web.person",
      "override_display_name": "",
      "summary": "",
      "language": 1,
      "organization": null,
      "organization_position": "",
      "organization_manager": false,
      "timezone": "UTC",
      "date_created": "2017-11-09T16:50:07+0000",
      "date_last_login": "2017-11-14T10:15:42+0000",
      "browser": "Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/62.0.3202.89 Safari\/537.36",
      "user_groups": [],
      "agent_groups": [1],
      "labels": [
        "admin",
        "board"
      ],
      "emails": [
        "john.doe@deskpro.com"
      ],
      "phone_numbers": [],
      "tickets_count": 54,
      "chats_count": 0,
      "fields": {},
      "contact_data": [],
      "teams": [],
      "primary_team": null
    },

    perform: triggerGetpersons
  }
};
