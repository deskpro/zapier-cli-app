const replaceImgSize = require('../functions/replace_img_size');
const replaceCustomFields = require('../functions/replace_custom_fields');

// triggers on new_person with a certain tag
const triggerNewperson = (z, bundle) => {
  const responsePromise = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/people`,
    params: {
      order_by: 'id',
      order_dir: 'desc',
    }
  });
  const getPersonCustomFields = z.request({
    url: `https://${bundle.authData.platform_url}/api/v2/person_custom_fields`
  });
  return Promise.all([responsePromise, getPersonCustomFields])
    .then(responses => {
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
  key: 'new_person',
  noun: 'Person',

  display: {
    label: 'New Person',
    description: 'Triggers when a new person is created.',
    important: true
  },

  operation: {
    inputFields: [

    ],
    outputFields: [
      {
        key: 'agent_data',
        type: 'string'
      },
      {
        key: 'agent_groups',
        type: 'string'
      },
      {
        key: 'avatar__base_gravatar_url',
        type: 'string'
      },
      {
        key: 'avatar__default_url_pattern',
        type: 'string'
      },
      {
        key: 'avatar__url_pattern',
        type: 'string'
      },
      {
        key: 'browser',
        type: 'string'
      },
      {
        key: 'can_admin',
        type: 'string',
        label: 'Can admin'
      },
      {
        key: 'can_agent',
        type: 'string'
      },
      {
        key: 'can_billing',
        type: 'string'
      },
      {
        key: 'chats_count',
        type: 'string'
      },
      {
        key: 'contact_data',
        type: 'string'
      },
      {
        key: 'creation_system',
        type: 'string'
      },
      {
        key: 'date_created',
        type: 'string'
      },
      {
        key: 'date_last_login',
        type: 'string'
      },
      {
        key: 'disable_autoresponses',
        type: 'string'
      },
      {
        key: 'disable_autoresponses_log',
        type: 'string'
      },
      {
        key: 'disable_picture',
        type: 'string'
      },
      {
        key: 'emails',
        type: 'string'
      },
      {
        key: 'first_name',
        type: 'string',
        label: 'First Name'
      },
      {
        key: 'gravatar_url',
        type: 'string'
      },
      {
        key: 'id',
        type: 'string',
        label: 'Id'
      },
      {
        key: 'is_agent',
        type: 'string',
        label: 'Is an agent'
      },
      {
        key: 'is_confirmed',
        type: 'string'
      },
      {
        key: 'is_contact',
        type: 'string'
      },
      {
        key: 'is_deleted',
        type: 'string'
      },
      {
        key: 'is_disabled',
        type: 'string'
      },
      {
        key: 'is_user',
        type: 'string',
        label: 'Is a user'
      },
      {
        key: 'labels',
        type: 'string'
      },
      {
        key: 'language',
        type: 'string'
      },
      {
        key: 'last_name',
        type: 'string',
        label: 'Last Name'
      },
      {
        key: 'last_seen',
        type: 'string'
      },
      {
        key: 'name',
        type: 'string',
        label: 'Name'
      },
      {
        key: 'online',
        type: 'string'
      },
      {
        key: 'organization',
        type: 'string',
        label: 'Organization Id'
      },
      {
        key: 'organization_manager',
        type: 'string'
      },
      {
        key: 'organization_position',
        type: 'string'
      },
      {
        key: 'override_display_name',
        type: 'string'
      },
      {
        key: 'phone_numbers',
        type: 'string'
      },
      {
        key: 'picture_blob',
        type: 'string'
      },
      {
        key: 'primary_email',
        type: 'string',
        label: 'Primary email address'
      },
      {
        key: 'primary_team',
        type: 'string'
      },
      {
        key: 'summary',
        type: 'string'
      },
      {
        key: 'teams',
        type: 'string'
      },
      {
        key: 'tickets_count',
        type: 'string'
      },
      {
        key: 'timezone',
        type: 'string'
      },
      {
        key: 'title_prefix',
        type: 'string'
      },
      {
        key: 'user_groups',
        type: 'string'
      },
      {
        key: 'was_agent',
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

    perform: triggerNewperson
  }
};
